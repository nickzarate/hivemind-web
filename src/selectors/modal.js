import { createStructuredSelector } from 'reselect'

export default createStructuredSelector({
  showModal: (state) => state.modal.showModal
})
