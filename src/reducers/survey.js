import { SET_HOURLY_WAGES, SET_MONTHLY_EARNINGS } from 'constants'
import { fromJS } from 'immutable'

const initialState = fromJS({
  hourlyWages: '',
  monthlyEarnings: ''
})

export default function survey(state = initialState, action) {
  switch (action.type) {
  case SET_HOURLY_WAGES:
    return state.set('hourlyWages', action.payload.hourlyWages)
  case SET_MONTHLY_EARNINGS:
    return state.set('monthlyEarnings', action.payload.monthlyEarnings)
  default:
    return state
  }
}
