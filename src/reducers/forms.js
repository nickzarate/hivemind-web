import initialFormsState from './initialFormsState'
import { createModelReducer, createFormReducer } from 'react-redux-form'
import { combineReducers } from 'redux'

export default combineReducers({
  estimates: createModelReducer('estimates', initialFormsState.estimates),
  estimatesForm: createFormReducer('estimates'),
  login: createModelReducer('login', initialFormsState.login),
  loginForm: createFormReducer('login'),
  ranges: createModelReducer('ranges', initialFormsState.ranges),
  rangesForm: createFormReducer('ranges')
})
