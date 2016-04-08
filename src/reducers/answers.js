import update from 'react-addons-update'
import { createAction } from 'redux-actions'

/* Action Types */
export const DEPOSIT = 'answers/DEPOSIT'
export const SET_ANSWERS = 'answers/SET_ANSWERS'
export const WITHDRAW = 'answers/WITHDRAW'

/* Actions */
export const deposit = createAction(DEPOSIT, (variableIndex, valueIndex) => ({ variableIndex, valueIndex }))
export const setAnswers = createAction(SET_ANSWERS, (answers) => ({ answers }))
export const withdraw = createAction(WITHDRAW, (variableIndex) => ({ variableIndex }))

/* Reducer */
export default function answers(state = [], action) {
  switch (action.type) {
  case DEPOSIT:
    return update(state, {[action.payload.variableIndex]: {binValues: {[action.payload.valueIndex]: {$apply: (value) => value + 1}}}})
  case SET_ANSWERS:
    return action.payload.answers
  case WITHDRAW:
    return update(state, {[action.payload.variableIndex]: {tokens: {$apply: (tokens) => tokens - 1}}})
  default:
    return state
  }
}
