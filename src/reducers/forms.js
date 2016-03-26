import initialFormsState from './initialFormsState'
import { modelReducer, formReducer } from 'react-redux-form'
import { combineReducers } from 'redux'

export default combineReducers({
  covariates: modelReducer('forms.covariates', initialFormsState.covariates),
  covariatesForm: formReducer('forms.covariates'),
  estimates: modelReducer('forms.estimates', initialFormsState.estimates),
  estimatesForm: formReducer('forms.estimates'),
  login: modelReducer('login', initialFormsState.login),
  loginForm: formReducer('login'),
  ranges: modelReducer('ranges', initialFormsState.ranges),
  rangesForm: formReducer('ranges'),
  signup: modelReducer('signup', initialFormsState.signup),
  signupForm: formReducer('signup'),
  survey: modelReducer('forms.survey', initialFormsState.survey),
  surveyForm: formReducer('forms.survey')
})
