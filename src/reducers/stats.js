import { SET_COVARIATE_DATA, SET_DATA, SET_PHI } from 'constants'
import { fromJS } from 'immutable'

const initialState = fromJS({
  data: [],
  covariateData: [],
  phi: []
})

export default function stats(state = initialState, action) {
  switch (action.type) {
  case SET_DATA:
    return state.set('data', action.payload.data)
  case SET_COVARIATE_DATA:
    return state.set('covariateData', action.payload.covariateData)
  case SET_PHI:
    return state.set('phi', action.payload.phi)
  default:
    return state
  }
}
