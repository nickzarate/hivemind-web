import { SHOW_MODAL } from './constants'
import { createAction } from 'redux-actions'

export const showModal = createAction(SHOW_MODAL, (showModal) => ({ showModal }))
