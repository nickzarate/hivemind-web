import { browserHistory } from 'react-router'
import { actions } from 'react-redux-form'
import { showModal } from 'actions/modal'

export function submitPage1() {
  return (dispatch, getState) => {
    const { forms: { survey } } = getState()
    // TODO: Check values of the survey form and set validity of surveyForm
    browserHistory.push('/signup/2')
  }
}

export function submitPage2() {
  return (dispatch, getState) => {
    const { forms: { survey } } = getState()
    // TODO: Check values of the survey form and set validity of surveyForm
    browserHistory.push('/signup/3')
  }
}

export function submitPage3() {
  return (dispatch, getState) => {
    const { forms: { survey } } = getState()
    // TODO: Check values of the survey form and set validity of surveyForm
    browserHistory.push('/signup/4')
  }
}

export function submitSurvey() {
  return (dispatch, getState) => {
    const { forms: { survey } } = getState()
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(showModal(true))
  }
}
