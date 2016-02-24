import { SET_HOURLY_WAGES, SET_MONTHLY_EARNINGS } from 'actions/constants'
import update from 'react-addons-update'

const initialState = {
  hourlyWages: '',
  monthlyEarnings: ''
}

export default function survey(state = initialState, action) {
  switch (action.type) {
  case SET_HOURLY_WAGES:
    return update(state, {hourlyWages: {$set: action.payload}})
  case SET_MONTHLY_EARNINGS:
    return update(state, {monthlyEarnings: {$set: action.payload}})
  default:
    return state
  }
}
