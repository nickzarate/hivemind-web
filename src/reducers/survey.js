import { SET_HOURLY_WAGES, SET_MONTHLY_EARNINGS } from 'constants'

const initialState = {
  hourlyWages: '',
  monthlyEarnings: ''
}

export default function survey(state = initialState, action) {
  switch (action.type) {
  case SET_HOURLY_WAGES:
    return {
      hourlyWages: action.payload.hourlyWages,
      monthlyEarnings: state.monthlyEarnings
    }
  case SET_MONTHLY_EARNINGS:
    return {
      hourlyWages: state.hourlyWages,
      monthlyEarnings: action.payload.monthlyEarnings
    }
  default:
    return state
  }
}
