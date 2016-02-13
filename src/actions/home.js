import { SET_CATEGORIES, SET_CURRENT_CATEGORY, SHOW_MODAL, SET_RANGE, SET_RANGES } from 'constants'
import { setErrorMessage } from 'actions/form'

export function setCurrentCategory(currentCategory) {
  return {
    type: SET_CURRENT_CATEGORY,
    payload: {
      currentCategory: currentCategory
    }
  }
}

export function setCategories(categories) {
  return {
    type: SET_CATEGORIES,
    payload: {
      categories: categories
    }
  }
}

export function showModal(showModal) {
  return {
    type: SHOW_MODAL,
    payload: {
      showModal: showModal
    }
  }
}

export function setRange(range, index) {
  return {
    type: SET_RANGE,
    payload: {
      range: range,
      index: index
    }
  }
}

export function setRanges(ranges) {
  return {
    type: SET_RANGES,
    payload: {
      ranges: ranges
    }
  }
}

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

    //Error handling
    for (let i = 0; i < form.values.length; i++) {
      //Turn information in form 'i' to numbers
      let value = []
      value.push(Number(form.values[i][0]))
      value.push(Number(form.values[i][1]))
      values.push(value)

      //Dispatch errors if any range value is empty, or if upper bound is smaller than lower bound
      if (values[i][1] === '' || values[i][0] === '') {
        dispatch(setErrorMessage('Please fill all of the ranges.', i))
      }
      if (values[i][1] <= values[i][0]) {
        dispatch(setErrorMessage('Uh oh! Upper bound is smaller than lower bound. Try again.', i))
      }
    }
    //Return if any errors have been dispatched
    for (let error of form.errorMessages) {
      if (error) {
        return
      }
    }
    //Set the range and move on
    dispatch(setRanges(values))
    push(path)
  }
}

/*
 *  Make a query to Parse to check how many categories are currently up
 */
export function getCategories(Parse) {
  return (dispatch) => {
    let query = new Parse.Query('Categories')
    query.find({
      success(categories) {
        dispatch(setCategories(categories))
      }
    })
  }
}
