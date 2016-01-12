import { combineReducers } from 'redux'
import user from './user'
import question from './question'
import round from './round'
import { routeReducer as routing } from 'redux-simple-router' // REMEMBER

const rootReducer = combineReducers({
  question,
  user,
  round,
  routing
})

export default rootReducer
