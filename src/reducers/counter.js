import { INCREMENT_COUNTER, DECREMENT_COUNTER } from 'constants'

export default function counter(state = { value: 0 }, action) {
  switch (action.type) {
  case INCREMENT_COUNTER:
    return { value: state.value + action.amount }
  case DECREMENT_COUNTER:
    return { value: state.value - action.amount }
  default:
    return state
  }
}
