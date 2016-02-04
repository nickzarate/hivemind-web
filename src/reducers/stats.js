import { SET_COVARIATE_DATA, SET_DATA, SET_PHI, SET_SERIES, SET_OUTCOMES, CLEAR } from 'constants'
import update from 'react-addons-update'

const initialState = {
  data: [],
  covariateData: [],
  phi: [],
  outcomes: []
}

export default function stats(state = initialState, action) {
  switch (action.type) {
  case SET_DATA:
    return update(state, {data: {$set: action.payload.data}})
  case SET_COVARIATE_DATA:
    return update(state, {covariateData: {$set: action.payload.covariateData}})
  case SET_PHI:
    return update(state, {phi: {$set: action.payload.phi}})
  case SET_SERIES:
    return update(state, {data: {$splice: [[action.payload.index, 1, action.payload.data]]}})
  case SET_OUTCOMES:
    return update(state, {outcomes: {$set: action.payload.outcomes}})
  default:
    return state
  }
}
