import { combineReducers } from 'redux'
import user from './user'
import question from './question'
import round from './round'
import survey from './survey'
import stats from './stats'
import { routeReducer as routing } from 'redux-simple-router' // REMEMBER

const rootReducer = combineReducers({
  question,
  round,
  routing,
  survey,
  stats,
  user
})

export default rootReducer
