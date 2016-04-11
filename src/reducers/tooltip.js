import update from 'react-addons-update'
import { createAction } from 'redux-actions'

/* ACTION TYPES */
export const RESET_TOOLTIP = 'tooltip/RESET_TOOLTIP'
export const SET_TOOLTIP_MESSAGE = 'tooltip/SET_TOOLTIP_MESSAGE'
export const SET_TOOLTIP_TARGET = 'tooltip/SET_TOOLTIP_TARGET'

/* ACTIONS */
export const resetTooltip = createAction(RESET_TOOLTIP)
export const setTooltipMessage = createAction(SET_TOOLTIP_MESSAGE, (message) => ({ message }))
export const setTooltipTarget = createAction(SET_TOOLTIP_TARGET, (target) => ({ target }))

/* REDUCER */
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
