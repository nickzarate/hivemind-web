import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux' // REMEMBER
import answer from './answer'
import category from './category'
import forms from './forms'
import modal from './modal'
import question from './question'
import round from './round'
import stats from './stats'
import tooltip from './tooltip'
import initialFormsState from './initialFormsState'

import { modelReducer, formReducer } from 'react-redux-form'

export default combineReducers({
  answer,
  category,
  forms,
  modal,
  question,
  round,
  routing,
  stats,
  survey: modelReducer('survey', initialFormsState.survey),
  surveyForm: formReducer('survey'),
  tooltip
})
