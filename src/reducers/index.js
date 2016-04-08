import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux' // REMEMBER
import answers from './answers'
import category from './category'
import forms from './forms'
import modal from './modal'
import question from './question'
import round from './round'
import stats from './stats'
import tooltip from './tooltip'

export default combineReducers({
  answers,
  category,
  forms,
  modal,
  question,
  round,
  routing,
  stats,
  tooltip
})
