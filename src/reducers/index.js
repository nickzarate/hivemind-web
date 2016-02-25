import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux' // REMEMBER
import { createModelReducer } from 'react-redux-form'
import forms from './forms'
import form from './form'
import modal from './modal'
import question from './question'
import round from './round'
import stats from './stats'
import survey from './survey'

export default combineReducers({
  form,
  login: createModelReducer('login', forms.loginState),
  ranges: createModelReducer('ranges', forms.rangesState),
  modal,
  question,
  round,
  routing,
  stats,
  survey
})
