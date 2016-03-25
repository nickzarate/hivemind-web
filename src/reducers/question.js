import { SET_QUESTION } from 'actions/constants'
import update from 'react-addons-update'

const initialState = {
  covariateValues: [],
  objectId: '',
  outcomeValues: []
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case SET_QUESTION:
    return update(state, {$set: action.payload.question})
  default:
    return state
  }
}
