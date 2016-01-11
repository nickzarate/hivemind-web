import { ERROR, RESOLVE_ERROR } from 'constants'
import { error_responses } from 'assets'

export function handleError(error) {
  return {
    type: ERROR,
    errorMessage: error_responses[error.code]
  }
}

export function resolveError() {
  return {
    type: RESOLVE_ERROR
  }
}
