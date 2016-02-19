import { SET_COVARIATE_DATA, SET_DATA, SET_PHI, SET_SERIES, SET_OUTCOMES, SET_OUTCOME_INDEX, ADD_PHI } from 'constants'
import update from 'react-addons-update'

const initialState = {
  covariateData: [],
  data: [],
  outcomes: [],
  outcomeIndex: 0,
  phi: []
}

export default function stats(state = initialState, action) {
  switch (action.type) {
  case ADD_PHI:
    return update(state, {phi: {$push: [action.phi]}})
  case SET_COVARIATE_DATA:
    return update(state, {covariateData: {$set: action.covariateData}})
  case SET_DATA:
    return update(state, {data: {$set: action.data}})
  case SET_OUTCOMES:
    return update(state, {outcomes: {$set: action.outcomes}})
  case SET_OUTCOME_INDEX:
    return update(state, {outcomeIndex: {$set: action.outcomeIndex}})
  case SET_PHI:
    return update(state, {phi: {$set: action.phi}})
  case SET_SERIES:
    return update(state, {data: {$splice: [[action.index, 1, action.data]]}})
  default:
    return state
  }
}
