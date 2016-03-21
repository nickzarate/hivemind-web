import { DEPOSIT, WITHDRAW, SET_BIN_VALUES, SET_BANK, SET_ANSWER_SUBMITTED } from 'actions/constants'
import update from 'react-addons-update'

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
