import { SET_CATEGORIES, SET_CURRENT_CATEGORY, SET_RANGE, SET_RANGES, SET_UNLOCKED } from './constants'
import { setErrorMessage } from 'actions/form'
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
          dispatch(setErrorMessage(null, rangeIndex))
        }
        dispatch(setRange(range, rangeIndex))
      } else {
        dispatch(setRange(['',''], rangeIndex))
      }
    } else {
      if (form.errorMessages[rangeIndex]) {
        dispatch(setErrorMessage(null, rangeIndex))
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
 *  Check ranges to see if an error message needs to be dispatched
 */
export function handleRangeSubmission(push, path) {
  return (dispatch, getState) => {
    const { form } = getState()
    let values = []
    let error = false

    //Error handling
    for (let i = 0; i < form.values.length; i++) {
      //Turn information in form 'i' to numbers
      let value = form.values[i].slice(0)
      value[0] = value[0].length > 0 ? Number(value[0]) : value[0]
      value[1] = value[1].length > 0 ? Number(value[1]) : value[1]
      values.push(value)

      //Dispatch errors if any range value is empty, or if upper bound is smaller than lower bound
      if (value[0] === '' || value[1] === '') {
        dispatch(setErrorMessage('Please fill all of the ranges.', i))
        error = true
      }
      if (value[0] > value[1]) {
        dispatch(setErrorMessage('Uh oh! Upper bound is smaller than lower bound. Try again.', i))
        error = true
      }
    }
    //Return if any errors have been dispatched
    if (error) {
      return
    }
    //Set the range and move on
    dispatch(setRanges(values))
    push(path)
  }
}

/*
 *  If all values in the form are filled, unlock the category, and set the information on the current user
 */
export function handleSurveySubmission(Parse) {
  return (dispatch, getState) => {
    const { form, round } = getState()
    var values = form.values[0].slice(0)
    for (var i = 0; i < values.length; i++) {
      if (values[i] != '') {
        values[i] = Number(values[i])
      } else {
        dispatch(setErrorMessage('All information must be filled in before submitting', 0))
        return
      }
    }
    dispatch(setUnlocked(true, round.currentCategory.get('index')))
    let information = { [round.currentCategory.get('name')]: values }
    let user = Parse.User.current()
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
        dispatch(setErrorMessage('Upper bound is smaller than lower bound. Try another range.', rangeIndex))
      }
    }
  }
}
