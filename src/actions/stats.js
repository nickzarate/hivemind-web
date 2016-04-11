import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { post } from 'actions/http'
import { addPhi, setCovariateData, setData, setSeries } from 'reducers/stats'

/*
 *  Call Python server and get Phi given the info in the current state.
 */
export function asyncGetPhis() {
  return (dispatch, getState) => {
    const { round, category } = getState()
    let outcomeLength = round.currentRound ? category.outcomes.length : 0
    // let outcomeLength = round.currentRound ? round.currentRound.get('answers')[0].outcomeAnswers.length : 0
    for (let i = 0; i < outcomeLength; i++) {
      // Get covariates and predictions from the latest round to analyze and get phi
      let predictions = [], covariates = []
      for (let answer of round.currentRound.get('answers')) {
        predictions.push(answer.get('outcomeAnswers')[i].estimate)
        for (let outcome of category.outcomes) {
          covariates.push(answer.get('question').get(outcome.variableName))
        }
      }
      dispatch(post('/api/v1/get_phi', { covariates, predictions }, addPhi))
    }
  }
}

/*
 *  Get initial covariate data
 *  TODO: Call Parse and get initial user data about covariates
 */
export function getCovariateData() {
  return (dispatch, getState) => {
    const { category: { name } } = getState()
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    let information = Parse.User.current().get('categoryInformation')
    let data = information[name]
    let covariateData = []
    for (let i = 0; i < data.length; i++) {
      let item = []
      for (let j = 0; j < data.length; j++) {
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
    const { category: { covariates } } = getState()
    let labels = []
    for (let covariate of covariates) {
      labels.push(covariate.range)
    }
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

/*
 *  Update the chart of the given index based on the current value of Phi at the 'outcomeIndex'
 *  Plot several points of the given equation y = alpha + beta1 * x + beta2 * c2 ... + beta * x^2 + ... + betaN * cn
 */
export function updateChart(chartIndex) {
  return (dispatch, getState) => {
    const { stats, category: { covariates } } = getState()
    let covariateRanges = []
    for (let covariate of covariates) {
      covariateRanges.push(covariate.range)
    }

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
 *  Update the x-axes at the given chart index
 */
export function updateSeries(index, series) {
  return (dispatch, getState) => {
    const { stats } = getState()
    let data = Object.assign({}, stats.data[index])
    data.series = series
    dispatch(setSeries(index, data))
  }
}
