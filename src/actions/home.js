import { SET_CATEGORIES, SET_CURRENT_CATEGORY, SHOW_MODAL, SET_RANGE } from 'constants'

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

export function setRange(data) {
  return {
    type: SET_RANGE,
    payload: {
      min: data[0],
      max: data[1]
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
