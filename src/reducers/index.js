import { combineReducers } from 'redux'
import counter from './counter'
import login from './login'
import { routeReducer as routing } from 'redux-simple-router' // REMEMBER

const rootReducer = combineReducers({
  counter,
  login,
  routing
})

export default rootReducer
