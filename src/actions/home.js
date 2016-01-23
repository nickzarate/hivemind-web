import { INCREMENT_NUM_QUESTIONS, DECREMENT_NUM_QUESTIONS, SET_NUM_CATEGORIES } from 'constants'

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

export function setNumCategories(numCategories) {
  return {
    type: SET_NUM_CATEGORIES,
    payload: {
      numCategories: numCategories
    }
  }
}

/*
 *  Make a query to Parse to check how many categories are currently up
 */
export function getNumCategories(Parse) {
  return (dispatch) => {
    var query = new Parse.Query('Categories')
    query.find(function (categories) {
      console.log(categories.length)
      dispatch(setNumCategories(categories.length))
    })
  }
}
