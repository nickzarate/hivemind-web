import update from 'react-addons-update'
import { createAction } from 'redux-actions'

/* Action Types */
const SHOW_MODAL = 'modal/SHOW_MODAL'

/* Actions */
export const showModal = createAction(SHOW_MODAL, (showModal) => { showModal })

/* Reducer */
const initialState = {
  showModal: false
}
export default function modal(state = initialState, action) {
  switch (action.type) {
  case SHOW_MODAL:
    return update(state, {showModal: {$set: action.payload.showModal}})
  default:
    return state
  }
}
