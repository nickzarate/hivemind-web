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
    const { forms: { covariates }, round } = getState()
    var covariateValues = []
    for (let covariateName of round.currentCategory.get('covariateNames')) {
      covariateValues.push(covariates[covariateName])
    }
    dispatch(setUnlocked(true, round.currentCategory.get('index')))
    let information = { [round.currentCategory.get('name')]: covariateValues }
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
