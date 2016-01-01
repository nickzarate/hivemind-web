import { combineReducers } from 'redux'
import counter from './counter'
import login from './login'
import home from './home'
import { edQuestion } from './questions'
import { routeReducer as routing } from 'redux-simple-router' // REMEMBER

const rootReducer = combineReducers({
  counter,
  edQuestion,
  home,
  login,
  routing
})

export default rootReducer
