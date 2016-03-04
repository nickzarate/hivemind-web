import { combineReducers } from 'redux'
import { routeReducer as routing } from 'react-router-redux' // REMEMBER
import answer from './answer'
import category from './category'
import forms from './forms'
import modal from './modal'
import question from './question'
import round from './round'
import stats from './stats'
import survey from './survey'
import tooltip from './tooltip'

export default combineReducers({
  answer,
  category,
  forms,
  modal,
  question,
  round,
  routing,
  stats,
  survey,
  tooltip
})
