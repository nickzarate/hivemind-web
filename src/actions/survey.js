import { browserHistory } from 'react-router'
import { actions } from 'react-redux-form'
import { showModal } from 'actions/modal'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export function submitPage1() {
  return (dispatch, getState) => {
    const { forms: { surveyForm } } = getState()
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(actions.validateErrors('survey.stateOfResidence', {
      required: (val) => { console.log(val); return val && val.length === 0 && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.gender', {
      required: (val) => { console.log(val); return val && val.length === 0 && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.hispanic', {
      required: (val) => { console.log(val); return val && val.length === 0 && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.isBornInUS', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.isEnglishPrimaryLanguage', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    if (surveyForm.valid) {
      browserHistory.push('/signup/2')
    }
  }
}

export function submitPage2() {
  return (dispatch, getState) => {
    const { forms: { surveyForm } } = getState()
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(actions.validateErrors('survey.isLunchReducedPrice', {
      required: (val) => { console.log(val); return typeof val === 'string' && val.length === 0 && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.isStudent', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.isEmployed', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.annualSalary', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.workHoursPerWeek', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.yearsOfWorkExperienceOverall', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    if (surveyForm.valid) {
      browserHistory.push('/signup/3')
    }
  }
}

export function submitPage3() {
  return (dispatch, getState) => {
    const { forms: { surveyForm } } = getState()
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(actions.validateErrors('survey.yearsOfWorkExperienceInCurrentCareer', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.yearsOfCompletedSchooling', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.intendedYearsOfCompletedSchooling', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.highestEducationDegree', {
      required: (val) => { console.log(val); return val && val.length === 0 && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.intendedHighestEducationDegree', {
      required: (val) => { console.log(val); return val && val.length === 0 && 'Must answer!' }
    }))
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
    dispatch(actions.validateErrors('survey.highSchoolGPA', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.collegeGPA', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.fathersEducation', {
      required: (val) => { console.log(val); return val && val.length === 0 && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.fathersEducationIsGuess', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.mothersEducation', {
      required: (val) => { console.log(val); return val && val.length === 0 && 'Must answer!' }
    }))
    dispatch(actions.validateErrors('survey.mothersEducationIsGuess', {
      required: (val) => { console.log(val); return typeof val === 'string' && 'Must answer!' }
    }))
    if (surveyForm.valid) {
      dispatch(showModal(true))
    }
  }
}
