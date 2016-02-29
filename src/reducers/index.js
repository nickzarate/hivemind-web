import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux' // REMEMBER
import forms from './forms'
import modal from './modal'
import question from './question'
import round from './round'
import stats from './stats'
import survey from './survey'

export default combineReducers({
  forms,
  modal,
  question,
  round,
  routing,
  stats,
  survey
})
