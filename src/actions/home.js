import { INCREMENT_NUM_QUESTIONS, DECREMENT_NUM_QUESTIONS, SET_CATEGORIES, SET_CURRENT_CATEGORY } from 'constants'

export function incrementNumQuestions() {
  return {
    type: INCREMENT_NUM_QUESTIONS
  }
}

export function decrementNumQuestions() {
  return {
    type: DECREMENT_NUM_QUESTIONS
  }
}

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

/*
 *  Make a query to Parse to check how many categories are currently up
 */
export function getCategories(Parse) {
  return (dispatch) => {
    var query = new Parse.Query('Categories')
    query.find({
      success(categories) {
        dispatch(setCategories(categories))
      },
      error(error) {
        console.log('Error: ' + error.code + ' ' + error.message)
      }
    })
  }
}
