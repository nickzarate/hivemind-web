import { combineReducers } from 'redux'
import user from './user'
import question from './question'
import round from './round'
import survey from './survey'
import stats from './stats'
import { routeReducer as routing } from 'react-router-redux' // REMEMBER
import { reducer as form } from 'redux-form'

const rootReducer = combineReducers({
  question,
  round,
  routing,
  survey,
  stats,
  user,
  form
})

export default rootReducer
