import { browserHistory } from 'react-router'
import { actions } from 'react-redux-form'
import { showModal } from 'reducers/modal'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export function submitPage1() {
  return (dispatch, getState) => {
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(actions.validateErrors('forms.survey.stateOfResidence', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.gender', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.hispanic', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.isBornInUS', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.isEnglishPrimaryLanguage', {
      required: (val) => !val.length && 'Must answer!'
    }))
    const { forms: { surveyForm } } = getState()
    if (surveyForm.valid) {
      browserHistory.push('/signup/2')
    }
  }
}

export function submitPage2() {
  return (dispatch, getState) => {
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(actions.validateErrors('forms.survey.isLunchReducedPrice', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.birthdate.day', {
      required: (val) => typeof val === 'string' && 'Must answer!',
      validDay: (val) => typeof val !== 'string' && (val < 1 || val > 31) && 'Please enter a valid day!'
    }))
    dispatch(actions.validateErrors('forms.survey.birthdate.month', {
      required: (val) => typeof val === 'string' && 'Must answer!',
      validMonth: (val) => typeof val !== 'string' && (val < 1 || val > 12) && 'Please enter a valid month!'
    }))
    dispatch(actions.validateErrors('forms.survey.birthdate.year', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.isStudent', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.isEmployed', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.annualSalary', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.workHoursPerWeek', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.yearsOfWorkExperienceOverall', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    const { forms: { surveyForm } } = getState()
    if (surveyForm.valid) {
      browserHistory.push('/signup/3')
    }
  }
}

export function submitPage3() {
  return (dispatch, getState) => {
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(actions.validateErrors('forms.survey.yearsOfWorkExperienceInCurrentCareer', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.yearsOfCompletedSchooling', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.intendedYearsOfCompletedSchooling', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.highestEducationDegree', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.intendedHighestEducationDegree', {
      required: (val) => !val.length && 'Must answer!'
    }))
    const { forms: { surveyForm } } = getState()
    if (surveyForm.valid) {
      browserHistory.push('/signup/4')
    }
  }
}

export function submitSurvey() {
  return (dispatch, getState) => {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    // TODO: Check values of the survey form and set validity of surveyForm
    dispatch(actions.validateErrors('forms.survey.highSchoolGPA', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.collegeGPA', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.fathersEducation', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.fathersEducationIsGuess', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.mothersEducation', {
      required: (val) => !val.length && 'Must answer!'
    }))
    dispatch(actions.validateErrors('forms.survey.mothersEducationIsGuess', {
      required: (val) => typeof val === 'string' && 'Must answer!'
    }))
    const { forms: { surveyForm } } = getState()
    if (surveyForm.valid) {
      dispatch(showModal(true))
    }
  }
}
