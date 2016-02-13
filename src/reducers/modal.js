import { SHOW } from 'constants'
import update from 'react-addons-update'

const initialState = {
  show: false
}

export default function question(state = initialState, action) {
  switch (action.type) {
  case SHOW:
    return update(state, {show: {$set: action.payload.show}})
  default:
    return state
  }
}
