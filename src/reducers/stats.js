import { SET_COVARIATE_DATA, SET_DATA, SET_PHI } from 'constants'

const initialState = {
  data: [],
  covariateData: [],
  phi: []
}

export default function stats(state = initialState, action) {
  switch (action.type) {
  case SET_DATA:
    return {
      data: action.payload.data,
      covariateData: state.covariateData,
      phi: state.phi
    }
  case SET_COVARIATE_DATA:
    return {
      data: state.data,
      covariateData: action.payload.covariateData,
      phi: state.phi
    }
  case SET_PHI:
    console.log('setting phi to...')
    console.log(action.payload.phi)
    return {
      data: state.data,
      covariateData: state.covariateData,
      phi: action.payload.phi
    }
  default:
    return state
  }
}
