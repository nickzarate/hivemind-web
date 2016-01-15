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

// export function testApi() {
//   return (dispatch) => {
//     $.get(env.SOURCE + '/api/v1/echo', function(response) {
//       console.log(response)
//       //dispatch(echo(response))
//     })
//   }
// }

export function updateCovariateData(covariate, covariateIndex, covariateValue) {
  return (dispatch, getState) => {
    const { stats } = getState()
    let covariateData = stats.covariateData.slice(0)
    covariateData[covariate][covariateIndex] = covariateValue
    dispatch(setCovariateData(covariateData))
    dispatch(updateChart(covariate, covariateIndex, covariateValue))
  }
}

export function getPhi() {
  return (dispatch, getState) => {
    //TODO: Call our Python server to get phi
    let phi = [1,1,1,0.5,0]
    dispatch(setPhi(phi))
  }
}

export function getCovariateData() {
  return (dispatch, getState) => {
    //TODO: Call Parse and get initial user data about covariates
    let covariateData = [[0],[0]]
    dispatch(setCovariateData(covariateData))
  }
}

export function getData() {
  return (dispatch, getState) => {
    //TODO: TEMP
    let data = []
    for (let i = 0; i < 2; i++) {
      let lineData = []
      for (let j = 0; j < 1; j++) {
        let values = [{
          x: 0,
          y: 0
        }]
        let series = {
          name: 'You',
          values: values
        }
        lineData.push(series)
      }
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

//TODO: Give description
export function updateChart(chart, covariateIndex, covariateValue) {
  return (dispatch, getState) => {
    const { stats } = getState()
    let data = stats.data.slice(0)
    let chartData = []
    let values = []
    for (let i = 0; i < 10; i++) {
      console.log('x:')
      console.log(i)
      let y = func(i, stats.covariateData[chart], stats.phi, chart)
      console.log('y:')
      console.log(y)
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
    data[chart] = chartData
    dispatch(setData(data))
  }
}

//TODO: Give description
function func(x, args, phi, covariateIndex) {
  console.log('FUNC PARAMETERS')
  console.log(x)
  console.log(args)
  console.log(phi)
  console.log(covariateIndex)

  //TODO: Give description
  let numCovariates = args.length + 1
  let y = phi[0]
  let betas = phi.slice(1)
  let newArgs = args.slice(0)

  //TODO: Give description
  for (let i = 0; i < args.length; i++) {
    newArgs.push(Math.pow(args[i], 2))
  }
  newArgs.splice(covariateIndex, 0, x)
  newArgs.splice(covariateIndex + numCovariates, 0, Math.pow(x, 2))

  //TODO: Give description
  for (let j in betas) {
    //TODO: pass in covariateIndex (name something else)
    y += betas[j] * newArgs[j]
  }
  return y
}  
