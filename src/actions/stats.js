import { SET_PHI, SET_DATA, SET_COVARIATE_DATA, SET_SERIES, SET_OUTCOMES, SET_OUTCOME_INDEX, ADD_PHI } from 'constants'

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

export function setOutcomeIndex(outcomeIndex) {
  return {
    type: SET_OUTCOME_INDEX,
    payload: {
      outcomeIndex: outcomeIndex
    }
  }
}

export function addPhi(phi) {
  return {
    type: ADD_PHI,
    payload: {
      phi: phi
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
export function asyncGetPhis() {
  return (dispatch, getState) => {
    const { round } = getState()
    let estimates = round.currentRound ? round.currentRound.get('answers')[0].get('estimates') : []
    for (let i = 0; i < estimates.length; i++) {
      // Get covariates and predictions from the latest round to analyze and get phi
      let predictions = []
      let covariates = []
      for (let answer of round.currentRound.get('answers')) {
        predictions.push(answer.get('estimates')[i])
        covariates.push(answer.get('question').get('covariateValues'))
      }

      // TODO: we need a different name than 'env.source'
      $.ajax({
        url: env.SOURCE + '/api/v1/get_phi',
        method: 'POST',
        data: JSON.stringify({
          covariates: covariates,
          p: predictions
        }),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: (response) => dispatch(addPhi(response.phi))
      })
    }
  }
}

/*
 *  Get initial covariate data
 *  TODO: Call Parse and get initial user data about covariates
 */
export function getCovariateData(user) {
  return (dispatch, getState) => {
    const { round } = getState()
    var information = user.get('categoryInformation')
    var data = information[round.currentCategory.get('name')]
    var covariateData = []
    for (var i = 0; i < data.length; i++) {
      var item = []
      for (var j = 0; j < data.length; j++) {
        if (j !== i) {
          item.push(data[j])
        }
      }
      covariateData.push(item)
    }
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
    let labels = round.currentCategory.get('covariateRanges')
    for (let label of labels) {
      let range = label[1] - label[0]
      let numXAxisValues = 10
      while (numXAxisValues >= range) {
        numXAxisValues--
      }
      let step = range / numXAxisValues
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
//TODO: Dispatch setLineData with newly created lineData variable
//TODO: Change value of z to reflect the user characteristic for the covariate that is not being graphed.
//TODO: Change value '10' in 'i * 10' to be a variable that represents the desired range of the data.
//TODO: Change value '10' in 'i < 10' to be a variable that represents the number of points displayed.
//TODO: Change hardcoded name to the users custom name?
//TODO: Make the f(x) inside updateChart be abstract or easy to change for different use cases?
/*
 *  Update the chart of the given index based on the current value of Phi at the 'outcomeIndex'
 *  Plot several points of the given equation y = alpha + beta1 * x + beta2 * c2 ... + beta * x^2 + ... + betaN * cn
 */
export function updateChart(chartIndex) {
  return (dispatch, getState) => {
    const { stats, round } = getState()
    let covariateRanges = round.currentCategory.get('covariateRanges')

    //Create array of betas and array of covariate values to multiply together
    let betas = stats.phi[stats.outcomeIndex].slice(1)
    let covariateValues = stats.covariateData[chartIndex].slice(0)
    for (let i = 0; i < stats.covariateData[chartIndex].length; i++) {
      covariateValues.push(Math.pow(stats.covariateData[chartIndex][i], 2))
    }
    let alpha = stats.phi[stats.outcomeIndex][0]
    let single = []
    for (let item of covariateRanges[chartIndex]) {
      let tempCovariateValues = covariateValues.slice(0)
      let y = alpha
      tempCovariateValues.splice(chartIndex, 0, item)
      tempCovariateValues.splice(chartIndex + stats.covariateData[chartIndex].length + 1, 0, Math.pow(item, 2))
      for (let j in betas) {
        y += betas[j] * tempCovariateValues[j]
      }
      single.push(y)
    }
    let series = []
    series.push(single)
    dispatch(updateSeries(chartIndex, series))
  }
}
