import { browserHistory } from 'react-router'
import { actions } from 'react-redux-form'
import { showModal } from 'actions/modal'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export function submitPage1() {
  return (dispatch, getState) => {
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(actions.validateErrors('survey.stateOfResidence', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.gender', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.hispanic', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.isBornInUS', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.isEnglishPrimaryLanguage', {
      required: (val) => !val.length && 'Must answer!'
    }))
    const { surveyForm } = getState()
    if (surveyForm.valid) {
      browserHistory.push('/signup/2')
    }
  }
}

export function submitPage2() {
  return (dispatch, getState) => {
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(actions.validateErrors('survey.isLunchReducedPrice', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.birthdate.day', {
      required: (val) => typeof val === 'string' && 'Must answer!',
      validDay: (val) => (val < 1 || val > 31) && 'Please enter a valid day!'
    }))
    dispatch(actions.validateErrors('survey.birthdate.month', {
      required: (val) => typeof val === 'string' && 'Must answer!',
      validMonth: (val) => (val < 1 || val > 12) && 'Please enter a valid month!'
    }))
    dispatch(actions.validateErrors('survey.birthdate.year', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.isStudent', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.isEmployed', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.annualSalary', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.workHoursPerWeek', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.yearsOfWorkExperienceOverall', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    const { surveyForm } = getState()
    if (surveyForm.valid) {
      browserHistory.push('/signup/3')
    }
  }
}

export function submitPage3() {
  return (dispatch, getState) => {
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(actions.validateErrors('survey.yearsOfWorkExperienceInCurrentCareer', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.yearsOfCompletedSchooling', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.intendedYearsOfCompletedSchooling', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.highestEducationDegree', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.intendedHighestEducationDegree', {
      required: (val) => !val.length && 'Must answer!'
    }))
    const { surveyForm } = getState()
    if (surveyForm.valid) {
      browserHistory.push('/signup/4')
    }
  }
}

export function submitSurvey() {
  return (dispatch, getState) => {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(actions.validateErrors('survey.highSchoolGPA', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.collegeGPA', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.fathersEducation', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.fathersEducationIsGuess', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.mothersEducation', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('survey.mothersEducationIsGuess', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    const { surveyForm } = getState()
    if (surveyForm.valid) {
      dispatch(showModal(true))
    }
  }
}
