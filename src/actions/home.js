import { SET_CATEGORY_NAMES, SET_CATEGORY, SET_RANGE, SET_RANGES, SET_UNLOCKED } from './constants'
import { showModal } from 'actions/modal'
import { setMessage, setTarget } from 'actions/tooltip'
import { createAction } from 'redux-actions'

export const setCategoryNames = createAction(SET_CATEGORY_NAMES, categoryNames => categoryNames)
export const setCategory = createAction(SET_CATEGORY, category => category)
export const setRange = createAction(SET_RANGE, (range, index) => { return { range, index } })
export const setRanges = createAction(SET_RANGES, ranges => ranges)
export const setUnlocked = createAction(SET_UNLOCKED, (unlocked, index) => { return { unlocked, index } })

/*
 *  Make a query to Parse to check how many categories are currently up
 */
export function asyncGetCategoryNames(Parse) {
  return (dispatch) => {
    let query = new Parse.Query('Categories')
    query.find({
      success(categories) {
        var categoryNames = []
        for (var category of categories) {
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
export function handleCategoryChoice(category) {
  return (dispatch) => {
    dispatch(setCurrentCategory(category))
    dispatch(showModal(true))
  }
}

/*
 *  Validate ranges, if everything looks good, start the round.
 */
export function handleStart(push, path) {
  return (dispatch, getState) => {
    const { forms: { ranges }, round: { currentCategory } } = getState()
    var outcomeNames = currentCategory.get('outcomeNames')
    var discrete = currentCategory.get('discrete')

    // Validation
    for (let i = 0; i < outcomeNames.length; i++) {
      if (!discrete[i] && !ranges[outcomeNames[i]]) {
        dispatch(setMessage('All fields must be filled in.'))
        dispatch(setTarget(outcomeNames[i]))
        return
      }
    }
    for (let outcomeName in ranges) {
      if (isNaN(ranges[outcomeName].lower) || isNaN(ranges[outcomeName].upper)) {
        dispatch(setMessage('All fields must be filled in.'))
        dispatch(setTarget(outcomeName))
        return
      }
    }
    for (let outcomeName in ranges) {
      if (ranges[outcomeName].lower >= ranges[outcomeName].upper) {
        dispatch(setMessage(outcomeName + ' range has a smaller upper bound than lower bound, try again.'))
        dispatch(setTarget(outcomeName))
        return
      }
    }
    push(path)
  }
}

/*
 *  If all values in the form are filled, unlock the category, and set the information on the current user
 */
export function handleSurveySubmission(user) {
  return (dispatch, getState) => {
    const { forms: { covariates }, round: { currentCategory } } = getState()
    var covariateValues = []

    // Validation
    for (let covariateName of currentCategory.get('covariateNames')) {
      if (isNaN(covariates[covariateName])) {
        dispatch(setMessage('All fields must be filled in.'))
        dispatch(setTarget(covariateName))
        return
      }
      covariateValues.push(covariates[covariateName])
    }

    dispatch(setUnlocked(true, currentCategory.get('index')))
    let information = { [currentCategory.get('name')]: covariateValues }
    user.add('unlockedCategories', currentCategory.get('name'))
    user.save({ categoryInformation: Object.assign(user.get('categoryInformation'), information) })
  }
}

/*
 *  Initialize the array of booleans that represent which categories are unlocked to the current user
 */
export function setUnlocks(categories, Parse) {
  return (dispatch) => {
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
