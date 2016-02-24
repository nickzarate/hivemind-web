import { SHOW_MODAL } from 'actions/constants'
import update from 'react-addons-update'

const initialState = {
  showModal: false
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case SHOW_MODAL:
    return update(state, {showModal: {$set: action.payload}})
  default:
    return state
  }
}
