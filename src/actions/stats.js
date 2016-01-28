import { SET_PHI, SET_DATA, SET_COVARIATE_DATA, SET_SERIES, SET_OUTCOMES } from 'constants'

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

export function setSeries(index, data) {
  return {
    type: SET_SERIES,
    payload: {
      index: index,
      data: data
    }
  }
}

export function setOutcomes(outcomes) {
  return {
    type: SET_OUTCOMES,
    payload: {
      outcomes: outcomes
    }
  }
}

export function updateSeries(index, series) {
  return (dispatch, getState) => {
    const { stats } = getState()
    let data = Object.assign({}, stats.data[index])
    data.series = series
    dispatch(setSeries(index, data))
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
 *  Depending on the covariateRange of the category under inspection,
 *  get the X-axis points that will ultimately be plotted.
 */
export function getData() {
  return (dispatch, getState) => {
    const { round } = getState()
    let labels = round.questionInfo.currentCategory.get('covariateRanges')
    for (let label of labels) {
      let range = label[1] - label[0]
      let divisor = 10
      while (divisor >= range) {
        divisor--
      }
      let step = range / divisor
      step = Math.floor(step + 0.5)
      //Build the label array to have an adequate number of values, each about the same length
      while (label[label.length - 1] - label[label.length - 2] > step) {
        label.splice(-1, 0, label[label.length - 2] + step)
      }
    }
    let data = []

    for (let k = 0; k < labels.length; k++) {
      let dataSet = {
        labels: labels[k],
        series: []
      }
      data.push(dataSet)
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
    let phi = [1,1.25,1.4,1.7,.8]

    //Create array of betas and array of covariate values to multiply together
    //let betas = stats.phi.slice(1)
    let betas = phi.slice(1)
    let covariateValues = stats.covariateData[chartIndex].slice(0)
    for (let i = 0; i < stats.covariateData[chartIndex].length; i++) {
      covariateValues.push(Math.pow(stats.covariateData[chartIndex][i], 2))
    }
    //let alpha = stats.phi[0]
    let alpha = phi[0]
    let single = []
    for (let i = 0; i < 20; i++) {
      let tempCovariateValues = covariateValues.slice(0)
      let y = alpha
      tempCovariateValues.splice(chartIndex, 0, i)
      tempCovariateValues.splice(chartIndex + stats.covariateData[chartIndex].length + 1, 0, Math.pow(i, 2))
      for (let j in betas) {
        y += betas[j] * tempCovariateValues[j]
      }
      single.push(y)
    }
    let series = []
    series.push(single)
    dispatch(updateSeries(chartIndex, series))
    // chartData.push(series)
    // data[chartIndex] = chartData
    // dispatch(setData(data))
  }
}
