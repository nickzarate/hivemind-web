import { combineReducers } from 'redux'
import counter from './counter'
import { routeReducer as routing } from 'redux-simple-router' // REMEMBER

const rootReducer = combineReducers({
  counter,
  routing
})

export default rootReducer
