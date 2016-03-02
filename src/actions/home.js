import { SET_CATEGORIES, SET_CURRENT_CATEGORY, SET_RANGE, SET_RANGES, SET_UNLOCKED } from './constants'
import { showModal } from 'actions/modal'
import { setMessage, setTarget } from 'actions/tooltip'
import { createAction } from 'redux-actions'

export const setCategories = createAction(SET_CATEGORIES, categories => categories)
export const setCurrentCategory = createAction(SET_CURRENT_CATEGORY, currentCategory => currentCategory)
export const setRange = createAction(SET_RANGE, (range, index) => { return { range, index } })
export const setRanges = createAction(SET_RANGES, ranges => ranges)
export const setUnlocked = createAction(SET_UNLOCKED, (unlocked, index) => { return { unlocked, index } })

/*
 *  Make a query to Parse to check how many categories are currently up
 */
export function asyncGetCategories(Parse) {
  return (dispatch) => {
    let query = new Parse.Query('Categories')
    query.find({
      success(categories) {
        dispatch(setCategories(categories))
        dispatch(setUnlocks(categories, Parse))
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

    // Validation
    for (let outcomeName of outcomeNames) {
      if (!ranges[outcomeName]) {
        dispatch(setMessage('All fields must be filled in.'))
        dispatch(setTarget(outcomeName))
        return
      }
    }
    for (let outcomeName of outcomeNames) {
      if (isNaN(ranges[outcomeName].lower) || isNaN(ranges[outcomeName].upper)) {
        dispatch(setMessage('All fields must be filled in.'))
        dispatch(setTarget(outcomeName))
        return
      }
    }
    for (let outcomeName of outcomeNames) {
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
