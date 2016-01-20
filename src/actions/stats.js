import { SET_PHI, SET_DATA, SET_COVARIATE_DATA } from 'constants'

export function setData(data) {
  return {
    type: SET_DATA,
    payload: {
      data: data
    }
  }
}

export function setCovariateData(covariateData) {
  return {
    type: SET_COVARIATE_DATA,
    payload: {
      covariateData: covariateData
    }
  }
}

export function setPhi(phi) {
  return {
    type: SET_PHI,
    payload: {
      phi: phi
    }
  }
}

/*
 *  Update the covariate data at the specified index with the specified value
 */
export function updateCovariateData(chartIndex, covariateIndex, covariateValue) {
  return (dispatch, getState) => {
    const { stats } = getState()
    let covariateData = stats.covariateData.slice(0)
    covariateData[chartIndex][covariateIndex] = covariateValue
    dispatch(setCovariateData(covariateData))
    dispatch(updateChart(chartIndex))
  }
}

/*
 *  Call Python server and get Phi given the info in the current state.
 */
export function asyncGetPhi() {
  return (dispatch, getState) => {
    const { round } = getState()

    // Get covariates and predictions from the latest round to analyze and get phi
    let predictions = []
    let covariates = []
    if (round.currentRound) {
      predictions = round.responseInfo.pointEstimateVector.slice(0)
      covariates = round.covariates.slice(0)
    } else { return }

    $.ajax({
      url: env.SOURCE + '/api/v1/get_phi',
      method: 'POST',
      data: JSON.stringify({
        covariates: covariates,
        p: predictions
      }),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8',
      success: (response) => dispatch(setPhi(response.phi))
    })
  }
}

/*
 *  Get initial covariate data
 *  TODO: Call Parse and get initial user data about covariates
 */
export function getCovariateData() {
  return (dispatch, getState) => {
    let covariateData = [[0],[0]]
    dispatch(setCovariateData(covariateData))
  }
}

/*
 *  Plot some initial data
 */
export function getData() {
  return (dispatch, getState) => {
    //TODO: TEMP
    let data = []
    for (let i = 0; i < 2; i++) {
      let lineData = []
      let values = [{x: 0, y: 0}]
      let series = {
        name: 'You',
        values: values
      }
      lineData.push(series)
      data.push(lineData)
    }
    dispatch(setData(data))
  }
}

//TODO: Build an array of x/y pairs, and create lineData
//TODO: Make server call to analyze data (round.responseInfo.answersVector &&
//    : round.responseInfo.estimateVector) and retrieve phi
//TODO: Dispatch setLineData with newly created lineData variable
//TODO: Change value of z to reflect the user characteristic for the covariate that is not being graphed.
//TODO: Change value '10' in 'i * 10' to be a variable that represents the desired range of the data.
//TODO: Change value '10' in 'i < 10' to be a variable that represents the number of points displayed.
//TODO: Change hardcoded name to the users custom name?
//TODO: Make the f(x) inside updateChart be abstract or easy to change for different use cases?
/*
 *  Update the chart of the given index based on the current value of Phi
 *  Plot several points of the given equation y = alpha + beta1 * x + beta2 * c2 ... + beta * x^2 + ... + betaN * cn
 */
export function updateChart(chartIndex) {
  return (dispatch, getState) => {
    const { stats } = getState()
    let data = stats.data.slice(0)
    let chartData = []
    let values = []

    //Create array of betas and array of covariate values to multiply together
    let betas = stats.phi.slice(1)
    let covariateValues = stats.covariateData[chartIndex].slice(0)
    for (let i = 0; i < stats.covariateData[chartIndex].length; i++) {
      covariateValues.push(Math.pow(stats.covariateData[chartIndex][i], 2))
    }
    let alpha = stats.phi[0]

    for (let i = 0; i < 20; i++) {
      let tempCovariateValues = covariateValues.slice(0)
      let y = alpha
      tempCovariateValues.splice(chartIndex, 0, i)
      tempCovariateValues.splice(chartIndex + stats.covariateData[chartIndex].length + 1, 0, Math.pow(i, 2))
      for (let j in betas) {
        y += betas[j] * tempCovariateValues[j]
      }
      let value = {
        x: i,
        y: y
      }
      values.push(value)
    }
    let series = {
      name: 'You',
      values: values
    }
    chartData.push(series)
    data[chartIndex] = chartData
    dispatch(setData(data))
  }
}
