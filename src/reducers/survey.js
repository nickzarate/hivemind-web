import { SET_HOURLY_WAGES, SET_MONTHLY_EARNINGS } from 'constants'
import update from 'react-addons-update'

const initialState = {
  hourlyWages: '',
  monthlyEarnings: ''
}

export default function survey(state = initialState, action) {
  switch (action.type) {
  case SET_HOURLY_WAGES:
    return update(state, {hourlyWages: {$set: action.hourlyWages}})
  case SET_MONTHLY_EARNINGS:
    return update(state, {monthlyEarnings: {$set: action.monthlyEarnings}})
  default:
    return state
  }
}
