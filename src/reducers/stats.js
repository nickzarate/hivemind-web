import { SET_LINE_DATA } from 'constants'

const initialState = {
  lineData: []
}

export default function survey(state = initialState, action) {
  switch (action.type) {
  case SET_LINE_DATA:
    return {
      lineData: action.payload.lineData
    }
  default:
    return state
  }
}
