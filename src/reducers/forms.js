import initialFormsState from './initialFormsState'
import { modelReducer, formReducer } from 'react-redux-form'
import { combineReducers } from 'redux'

export default combineReducers({
  covariates: modelReducer('covariates', initialFormsState.covariates),
  covariatesForm: formReducer('covariates'),
  estimates: modelReducer('estimates', initialFormsState.estimates),
  estimatesForm: formReducer('estimates'),
  login: modelReducer('login', initialFormsState.login),
  loginForm: formReducer('login'),
  ranges: modelReducer('ranges', initialFormsState.ranges),
  rangesForm: formReducer('ranges'),
  signup: modelReducer('signup', initialFormsState.signup),
  signupForm: formReducer('signup'),
  survey: modelReducer('forms.survey', initialFormsState.survey),
  surveyForm: formReducer('forms.survey')
})
