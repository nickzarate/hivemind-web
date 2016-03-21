import update from 'react-addons-update'
import { createAction } from 'redux-actions'

/* Action Types */
export const DEPOSIT = 'answer/DEPOSIT'
export const WITHDRAW = 'answer/WITHDRAW'
export const SET_BIN_VALUES = 'answer/SET_BIN_VALUES'
export const SET_BANK = 'answer/SET_BANK'
export const SET_ANSWER_SUBMITTED = 'answer/SET_ANSWER_SUBMITTED'

/* Actions */
export const deposit = createAction(DEPOSIT, (binsIndex, index) => ({ binsIndex, index }))
export const setAnswerSubmitted = createAction(SET_ANSWER_SUBMITTED, (submitted) => ({ submitted }))
export const setBank = createAction(SET_BANK, (bank) => ({ bank }))
export const setBinValues = createAction(SET_BIN_VALUES, (binValues) => ({ binValues }))
export const withdraw = createAction(WITHDRAW, (bankIndex) => ({ bankIndex }))

/* Reducer */
const initialState = {
  bank: [],
  binValues: [],
  submitted: true
}
export default function answer(state = initialState, action) {
  switch (action.type) {
  case DEPOSIT:
    return update(state, {binValues: {[action.payload.binsIndex]: {[action.payload.index]: {$apply: (value) => value + 1}}}})
  case SET_ANSWER_SUBMITTED:
    return update(state, {submitted: {$set: action.payload.submitted}})
  case SET_BANK:
    return update(state, {bank: {$set: action.payload.bank}})
  case SET_BIN_VALUES:
    return update(state, {binValues: {$set: action.payload.binValues}})
  case WITHDRAW:
    return update(state, {bank: {[action.payload.bankIndex]: {$apply: (bank) => bank - 1}}})
  default:
    return state
  }
}
