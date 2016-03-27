import { SET_CATEGORY_NAMES, SET_CATEGORY, SET_RANGE, SET_RANGES, SET_UNLOCKED } from './constants'
import { showModal } from 'actions/modal'
import { setTooltipMessage, setTooltipTarget } from 'actions/tooltip'
import { createAction } from 'redux-actions'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { browserHistory } from 'react-router'

export const setCategoryNames = createAction(SET_CATEGORY_NAMES, (categoryNames) => ({ categoryNames }))
export const setCategory = createAction(SET_CATEGORY, (category) => ({ category }))
export const setRange = createAction(SET_RANGE, (range, index) => ({ range, index }))
export const setRanges = createAction(SET_RANGES, (ranges) => ({ ranges }))
export const setUnlocked = createAction(SET_UNLOCKED, (unlocked, index) => ({ unlocked, index }))

/*
 *  Make a query to Parse to check how many categories are currently up
 */
export function asyncGetCategoryNames() {
  return (dispatch) => {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    let query = new Parse.Query('Categories')
    query.find({
      success(categories) {
        let categoryNames = []
        for (let category of categories) {
          categoryNames.push(category.get('name'))
        }
        dispatch(setCategoryNames(categoryNames))
        dispatch(setUnlockedCategories(categories, Parse.User.current()))
      }
    })
  }
}

/*
 *  Set the chosen category and open up the modal
 */
export function asyncHandleCategoryChoice(categoryName) {
  return (dispatch) => {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    let query = new Parse.Query('Categories')
    query.equalTo('name', categoryName)
    query.first({
      success(category) {

        // Select only the covariates and the outcomes that the 'client' desires.
        let covariateDataTypes = [], covariateNames = [], covariateRanges = [],
          outcomeDataTypes = [], numBins = [], outcomeNames = [], outcomeRanges = [],
          pointsPerToken = [], questionInstructions = [], tokens = [],
          covariatesToDisplay = category.get('covariatesToDisplay'), outcomesToDisplay = category.get('outcomesToDisplay')

        for (let index of covariatesToDisplay) {
          covariateDataTypes.push(category.get('covariateDataTypes')[index])
          covariateNames.push(category.get('covariateNames')[index])
          covariateRanges.push(category.get('covariateRanges')[index])
        }
        for (let index of outcomesToDisplay) {
          outcomeDataTypes.push(category.get('outcomeDataTypes')[index])
          numBins.push(category.get('numBins')[index])
          outcomeNames.push(category.get('outcomeNames')[index])
          outcomeRanges.push(category.get('outcomeRanges')[index])
          pointsPerToken.push(category.get('pointsPerToken')[index])
          questionInstructions.push(category.get('questionInstructions')[index])
          tokens.push(category.get('tokens')[index])
        }

        let selectedCategory = {
          allCovariateDataTypes: category.get('covariateDataTypes'),
          allCovariateNames: category.get('covariateNames'),
          categorySurveyInstructions: category.get('categorySurveyInstructions'),
          covariateDataTypes,
          covariateNames,
          covariateRanges,
          covariatesToDisplay,
          index: category.get('index'),
          name: category.get('name'),
          numBins,
          outcomeDataTypes,
          outcomeNames,
          outcomeRanges,
          outcomesToDisplay,
          pointsPerToken,
          questionInstructions,
          questionsPerRound: category.get('questionsPerRound'),
          roundInstructions: category.get('roundInstructions'),
          tokens
        }
        dispatch(setCategory(selectedCategory))
        dispatch(showModal(true))
      }
    })
  }
}

/*
 *  Validate ranges, if everything looks good, start the round.
 */
export function handleStart() {
  return (dispatch, getState) => {
    const { forms: { ranges }, category: { outcomeNames, outcomeDataTypes } } = getState()

    // Validation
    for (let i = 0; i < outcomeNames.length; i++) {
      if (outcomeDataTypes[i].type === 'continuous' && !ranges[outcomeNames[i]]) {
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
    let covariateValues = []
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    let user = Parse.User.current()

    // Validation
    for (let covariateName of covariateNames) {
      if (isNaN(covariates[covariateName])) {
        dispatch(setTooltipMessage('All fields must be filled in.'))
        dispatch(setTooltipTarget(covariateName))
        return
      }
      covariateValues.push(typeof covariates[covariateName] === 'string' ? Number(covariates[covariateName]) : covariates[covariateName])
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
    for (let category of categories) {
      let unlocked = false
      for (let name of Parse.User.current().get('unlockedCategories')) {
        if (name === category.get('name')) {
          unlocked = true
        }
      }
      dispatch(setUnlocked(unlocked, category.get('index')))
    }
  }
}
