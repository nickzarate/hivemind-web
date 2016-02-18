import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux' // REMEMBER
import form from './form'
import modal from './modal'
import question from './question'
import round from './round'
import stats from './stats'
import survey from './survey'
import user from './user'

export default combineReducers({
  form,
  modal,
  question,
  round,
  routing,
  stats,
  survey,
  user
})
