import initialFormState from './initialFormState'
import { createModelReducer, createFormReducer } from 'react-redux-form'
import { combineReducers } from 'redux'

export default combineReducers({
  login: createModelReducer('login', initialFormState.login),
  loginForm: createFormReducer('login'),
  ranges: createModelReducer('ranges', initialFormState.ranges),
  rangesForm: createFormReducer('ranges')
})
