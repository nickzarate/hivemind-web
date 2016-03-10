import { browserHistory } from 'react-router'
// import { actions } from 'react-redux-form'
import { showModal } from 'actions/modal'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export function submitPage1() {
  return (dispatch, getState) => {
    const { forms: { surveyForm } } = getState()
    // TODO: Check values of the survey form and set validity of surveyForm
    if (surveyForm.valid) {
      browserHistory.push('/signup/2')
    }
  }
}

export function submitPage2() {
  return (dispatch, getState) => {
    const { forms: { surveyForm } } = getState()
    // TODO: Check values of the survey form and set validity of surveyForm
    // dispatch(actions.validateErrors('survey.isLunchReducedPrice', {
    //   required: (val) => { console.log(val); return (typeof val === 'string' && val.length === 0) ? 'Must answer!' : false }
    // }))
    // dispatch(actions.validateErrors('survey.isStudent', {
    //   required: (val) => { return typeof val === 'string' && 'Must answer!' }
    // }))
    // dispatch(actions.validateErrors('survey.isEmployed', {
    //   required: (val) => typeof val === 'string' && 'Must answer!'
    // }))
    // dispatch(actions.validateErrors('survey.annualSalary', {
    //   required: (val) => typeof val === 'string' && 'Must answer!'
    // }))
    // dispatch(actions.validateErrors('survey.workHoursPerWeek', {
    //   required: (val) => typeof val === 'string' && 'Must answer!'
    // }))
    // dispatch(actions.validateErrors('survey.yearsOfWorkExperienceOverall', {
    //   required: (val) => typeof val === 'string' && 'Must answer!'
    // }))
    if (surveyForm.valid) {
      browserHistory.push('/signup/3')
    }
  }
}

export function submitPage3() {
  return (dispatch, getState) => {
    const { forms: { surveyForm } } = getState()
    // TODO: Check values of the survey form and set validity of surveyForm
    // dispatch(actions.validateErrors('survey.yearsOfWorkExperienceInCurrentCareer', {
    //   required: (val) => typeof val === 'string' && 'Must answer!'
    // }))
    // dispatch(actions.validateErrors('survey.yearsOfCompletedSchooling', {
    //   required: (val) => typeof val === 'string' && 'Must answer!'
    // }))
    // dispatch(actions.validateErrors('survey.intendedYearsOfCompletedSchooling', {
    //   required: (val) => typeof val === 'string' && 'Must answer!'
    // }))
    // dispatch(actions.validateErrors('survey.highestEducationDegree', {
    //   required: (val) => val.length === 0 && 'Must answer!'
    // }))
    // dispatch(actions.validateErrors('survey.intendedHighestEducationDegree', {
    //   required: (val) => val.length === 0 && 'Must answer!'
    // }))
    if (surveyForm.valid) {
      browserHistory.push('/signup/4')
    }
  }
}

export function submitSurvey() {
  return (dispatch, getState) => {
    const { forms: { surveyForm } } = getState()
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    // TODO: Check values of the survey form and set validity of surveyForm
    // dispatch(actions.validateErrors('survey.highSchoolGPA', {
    //   required: (val) => typeof val === 'string' && 'Must answer!'
    // }))
    // dispatch(actions.validateErrors('survey.collegeGPA', {
    //   required: (val) => typeof val === 'string' && 'Must answer!'
    // }))
    // dispatch(actions.validateErrors('survey.fathersEducation', {
    //   required: (val) => val.length === 0 && 'Must answer!'
    // }))
    // dispatch(actions.validateErrors('survey.mothersEducation', {
    //   required: (val) => val.length === 0 && 'Must answer!'
    // }))
    if (surveyForm.valid) {
      dispatch(showModal(true))
    }
  }
}
