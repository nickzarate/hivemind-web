import { SHOW_MODAL } from 'constants'

export function showModal(showModal) {
  return {
    type: SHOW_MODAL,
    payload: {
      showModal: showModal
    }
  }
}
