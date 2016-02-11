import { SET_CATEGORIES, SET_CURRENT_CATEGORY, SHOW_MODAL, SET_RANGE } from 'constants'
import { setErrorMessage } from 'actions/clear'

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

export function setRange(min, max) {
  return {
    type: SET_RANGE,
    payload: {
      min: min,
      max: max
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
export function handleRange(data, push) {
  return (dispatch) => {
    let min = Number(data[0])
    let max = Number(data[1])
    if (max <= min) {
      dispatch(setErrorMessage('Uh oh! Upper bound is smaller than lower bound. Try again.'))
    } else {
      dispatch(setRange(min, max))
      push
    }
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
