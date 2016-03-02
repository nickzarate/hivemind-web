import { RESET_TOOLTIP, SET_TOOLTIP_MESSAGE, SET_TOOLTIP_TARGET } from './constants'
import { createAction } from 'redux-actions'

export const setMessage = createAction(SET_TOOLTIP_MESSAGE, message => message)
export const setTarget = createAction(SET_TOOLTIP_TARGET, target => target)
export const resetTooltip = createAction(RESET_TOOLTIP)
