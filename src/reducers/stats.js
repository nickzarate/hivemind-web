import { SET_COVARIATE_DATA, SET_DATA, SET_PHI } from 'constants'
import update from 'react-addons-update'

const initialState = {
  data: [],
  covariateData: [],
  phi: []
}

export default function stats(state = initialState, action) {
  switch (action.type) {
  case SET_DATA:
    return update(state, {data: {$set: action.payload.data}})
  case SET_COVARIATE_DATA:
    return update(state, {covariateData: {$set: action.payload.covariateData}})
  case SET_PHI:
    return update(state, {phi: {$set: action.payload.phi}})
  default:
    return state
  }
}
