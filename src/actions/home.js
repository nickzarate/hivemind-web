import { SET_CATEGORIES, SET_CURRENT_CATEGORY, SET_RANGE, SET_RANGES, SET_UNLOCKED } from './constants'
import { showModal } from 'actions/modal'
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
 *  If the range at the given index is valid, set the state of that range
 *  If the range is valid and there is an error message, delete the message
 */
export function checkRange(rangeIndex) {
  return (dispatch, getState) => {
    const { form } = getState()
    let ranges = form.values.slice(0)
    let range = ranges[rangeIndex].slice(0)
    if (range[0] != '') {
      range[0] = Number(range[0])
    }
    if (range[1] != '') {
      range[1] = Number(range[1])
    }
    if (typeof range[0] === 'number' && typeof range[1] === 'number') {
      if (range[1] > range[0]) {
        if (form.errorMessages[rangeIndex]) {
          // dispatch(setErrorMessage(null, rangeIndex))
        }
        dispatch(setRange(range, rangeIndex))
      } else {
        dispatch(setRange(['',''], rangeIndex))
      }
    } else {
      if (form.errorMessages[rangeIndex]) {
        // dispatch(setErrorMessage(null, rangeIndex))
      }
      dispatch(setRange(['',''], rangeIndex))
    }
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
 *  If all values in the form are filled, unlock the category, and set the information on the current user
 */
export function handleSurveySubmission(user) {
  return (dispatch, getState) => {
    const { form, round } = getState()
    var values = form.values[0].slice(0)
    for (var i = 0; i < values.length; i++) {
      if (values[i] != '') {
        values[i] = Number(values[i])
      } else {
        // dispatch(setErrorMessage('All information must be filled in before submitting', 0))
        return
      }
    }
    dispatch(setUnlocked(true, round.currentCategory.get('index')))
    let information = { [round.currentCategory.get('name')]: values }
    user.add('unlockedCategories', round.currentCategory.get('name'))
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

/*
 *  If the range at the given index is valid, set the range state
 */
export function validateRange(rangeIndex) {
  return (dispatch, getState) => {
    const { form } = getState()
    let ranges = form.values.slice(0)
    let range = ranges[rangeIndex].slice(0)
    if (range[0] != '') {
      range[0] = Number(range[0])
    }
    if (range[1] != '') {
      range[1] = Number(range[1])
    }
    if (typeof range[0] === 'number' && typeof range[1] === 'number') {
      if (range[1] <= range[0]) {
        //dispatch(setErrorMessage('Upper bound is smaller than lower bound. Try another range.', rangeIndex))
      }
    }
  }
}
