import { RESET_TOOLTIP, SET_TOOLTIP_MESSAGE, SET_TOOLTIP_TARGET } from './constants'
import { createAction } from 'redux-actions'

export const setTooltipMessage = createAction(SET_TOOLTIP_MESSAGE, (message) => ({ message }))
export const setTooltipTarget = createAction(SET_TOOLTIP_TARGET, (target) => ({ target }))
export const resetTooltip = createAction(RESET_TOOLTIP)
