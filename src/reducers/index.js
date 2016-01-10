import { combineReducers } from 'redux'
import counter from './counter'
import login from './login'
import home from './home'
import { routeReducer as routing } from 'redux-simple-router' // REMEMBER

const rootReducer = combineReducers({
  counter,
  login,
  home,
  routing
})

export default rootReducer
