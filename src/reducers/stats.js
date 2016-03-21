import update from 'react-addons-update'
import { createAction } from 'redux-actions'

/* Action Types */
export const ADD_PHI = 'stats/ADD_PHI'
export const SET_COVARIATE_DATA = 'stats/SET_COVARIATE_DATA'
export const SET_DATA = 'stats/SET_DATA'
export const SET_OUTCOMES = 'stats/SET_OUTCOMES'
export const SET_OUTCOME_INDEX = 'stats/SET_OUTCOME_INDEX'
export const SET_PHI = 'stats/SET_PHI'
export const SET_SERIES = 'stats/SET_SERIES'

/* Actions */
export const addPhi = createAction(ADD_PHI, (phi) => ({ phi }))
export const setCovariateData = createAction(SET_COVARIATE_DATA, (covariateData) => ({ covariateData }))
export const setData = createAction(SET_DATA, (data) => ({ data }))
export const setOutcomes = createAction(SET_OUTCOMES, (outcomes) => ({ outcomes }))
export const setOutcomeIndex = createAction(SET_OUTCOME_INDEX, (outcomeIndex) => ({ outcomeIndex }))
export const setPhi = createAction(SET_PHI, (phi) => ({ phi }))
export const setSeries = createAction(SET_SERIES, (index, data) => ({ index, data }))

/* Reducer */
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
    return update(state, {phi: {$push: [action.payload.phi]}})
  case SET_COVARIATE_DATA:
    return update(state, {covariateData: {$set: action.payload.covariateData}})
  case SET_DATA:
    return update(state, {data: {$set: action.payload.data}})
  case SET_OUTCOMES:
    return update(state, {outcomes: {$set: action.payload.outcomes}})
  case SET_OUTCOME_INDEX:
    return update(state, {outcomeIndex: {$set: action.payload.outcomeIndex}})
  case SET_PHI:
    return update(state, {phi: {$set: action.payload.phi}})
  case SET_SERIES:
    return update(state, {data: {$splice: [[action.payload.index, 1, action.payload.data]]}})
  default:
    return state
  }
}
