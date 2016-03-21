import { SET_CATEGORY_NAMES, SET_CATEGORY, SET_RANGE, SET_RANGES, SET_UNLOCKED } from './constants'
import { showModal } from 'reducers/modal'
import { setTooltipMessage, setTooltipTarget } from 'reducers/tooltip'
import { createAction } from 'redux-actions'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { browserHistory } from 'react-router'

// export const setCategoryNames = createAction(SET_CATEGORY_NAMES, categoryNames => categoryNames)
// export const setCategory = createAction(SET_CATEGORY, category => category)
// export const setRange = createAction(SET_RANGE, (range, index) => { range, index })
// export const setRanges = createAction(SET_RANGES, ranges => ranges)
// export const setUnlocked = createAction(SET_UNLOCKED, (unlocked, index) => { unlocked, index })

/*
 *  Make a query to Parse to check how many categories are currently up
 */
// export function asyncGetCategoryNames() {
//   return (dispatch) => {
//     Parse.initialize(APP_ID, JAVASCRIPT_KEY)
//     let query = new Parse.Query('Categories')
//     query.find({
//       success(categories) {
//         var categoryNames = []
//         for (var category of categories) {
//           categoryNames.push(category.get('name'))
//         }
//         dispatch(setCategoryNames(categoryNames))
//         dispatch(setUnlockedCategories(categories, Parse.User.current()))
//       }
//     })
//   }
// }

/*
 *  Set the chosen category and open up the modal
 */
// export function asyncHandleCategoryChoice(categoryName) {
//   return (dispatch) => {
//     Parse.initialize(APP_ID, JAVASCRIPT_KEY)
//     var query = new Parse.Query('Categories')
//     query.equalTo('name', categoryName)
//     query.first({
//       success(category) {
//         var selectedCategory = {
//           categorySurveyInstructions: category.get('categorySurveyInstructions'),
//           covariateNames: category.get('covariateNames'),
//           covariateRanges: category.get('covariateRanges'),
//           discrete: category.get('discrete'),
//           index: category.get('index'),
//           instructions: category.get('instructions'),
//           name: category.get('name'),
//           numBins: category.get('numBins'),
//           outcomeNames: category.get('outcomeNames'),
//           outcomeRanges: category.get('outcomeRanges'),
//           pointsPerToken: category.get('pointsPerToken'),
//           questionInstructions: category.get('questionInstructions'),
//           questionsPerRound: category.get('questionsPerRound'),
//           tokens: category.get('tokens')
//         }
//         dispatch(setCategory(selectedCategory))
//         dispatch(showModal(true))
//       }
//     })
//   }
// }

/*
 *  Validate ranges, if everything looks good, start the round.
 */
export function handleStart() {
  return (dispatch, getState) => {
    const { forms: { ranges }, category: { outcomeNames, discrete } } = getState()

    // Validation
    for (let i = 0; i < outcomeNames.length; i++) {
      if (!discrete[i] && !ranges[outcomeNames[i]]) {
        dispatch(setTooltipMessage('All fields must be filled in.'))
        dispatch(setTooltipTarget(outcomeNames[i]))
        return
      }
    }
    for (let outcomeName in ranges) {
      if (isNaN(ranges[outcomeName].lower) || isNaN(ranges[outcomeName].upper)) {
        dispatch(setTooltipMessage('All fields must be filled in.'))
        dispatch(setTooltipTarget(outcomeName))
        return
      }
    }
    for (let outcomeName in ranges) {
      if (ranges[outcomeName].lower >= ranges[outcomeName].upper) {
        dispatch(setTooltipMessage(outcomeName + ' range has a smaller upper bound than lower bound, try again.'))
        dispatch(setTooltipTarget(outcomeName))
        return
      }
    }
    browserHistory.push('/round')
  }
}

/*
 *  If all values in the form are filled, unlock the category, and set the information on the current user
 */
export function handleSurveySubmission() {
  return (dispatch, getState) => {
    const { forms: { covariates }, category: { covariateNames, index, name } } = getState()
    var covariateValues = []
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    var user = Parse.User.current()

    // Validation
    for (let covariateName of covariateNames) {
      if (isNaN(covariates[covariateName])) {
        dispatch(setTooltipMessage('All fields must be filled in.'))
        dispatch(setTooltipTarget(covariateName))
        return
      }
      covariateValues.push(covariates[covariateName])
    }

    dispatch(setUnlocked(true, index))
    let information = { [name]: covariateValues }
    user.add('unlockedCategories', name)
    user.save({ categoryInformation: Object.assign(user.get('categoryInformation'), information) })
  }
}

/*
 *  Initialize the array of booleans that represent which categories are unlocked to the current user
 */
export function setUnlockedCategories(categories) {
  return (dispatch) => {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    for (var category of categories) {
      var unlocked = false
      for (var name of Parse.User.current().get('unlockedCategories')) {
        if (name === category.get('name')) {
          unlocked = true
        }
      }
      dispatch(setUnlocked(unlocked, category.get('index')))
    }
  }
}
