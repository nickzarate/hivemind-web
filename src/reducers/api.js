import { API_ECHO } from 'constants'

const initialState = {
  message: ''
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case API_ECHO:
    return {
      message: action.payload.message
    }
  default:
    return state
  }
}
