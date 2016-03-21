import { RESET_TOOLTIP, SET_TOOLTIP_TARGET, SET_TOOLTIP_MESSAGE } from 'actions/constants'
import update from 'react-addons-update'

const initialState = {
  target: '',
  message: ''
}

export default function tooltip(state = initialState, action) {
  switch (action.type) {
  case RESET_TOOLTIP:
    return update(state, {$set: initialState})
  case SET_TOOLTIP_MESSAGE:
    return update(state, {message: {$set: action.payload.message}})
  case SET_TOOLTIP_TARGET:
    return update(state, {target: {$set: action.payload.target}})
  default:
    return state
  }
}
