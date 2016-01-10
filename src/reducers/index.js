import { combineReducers } from 'redux'
import counter from './counter'
import user from './user'
import home from './home'
import question from './question'
import round from './round'
import { routeReducer as routing } from 'redux-simple-router' // REMEMBER

const rootReducer = combineReducers({
  counter,
  question,
  home,
  user,
  round,
  routing
})

export default rootReducer
