import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'constants'

export function increment() {
  return {
    type: INCREMENT_COUNTER,
    amount: 1
  }
}

export function decrement() {
  return {
    type: DECREMENT_COUNTER,
    amount: 1
  }
}
