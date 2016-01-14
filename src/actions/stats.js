import { SET_LINE_DATA } from 'constants'

export function setLineData(lineData) {
  return {
    type: SET_LINE_DATA,
    payload: {
      lineData: lineData
    }
  }
}

export function analyzeData() {
  return (dispatch, getState) => {
    const { round } = getState()
    //TODO: Make server call to analyze data (round.responseInfo.answersVector &&
    //    : round.responseInfo.estimateVector) and retrieve phi
    let phi = [1.5, 2]
    //TODO: Build an array of x/y pairs, and create lineData
    //TODO: Dispatch setLineData with newly created lineData variable
  }
}

/*
 *  Set the hourlyWages state if the new value is a valid estimate
 */
export function handleHourlyWages(event) {
  return (dispatch) => {
    let hourlyWages = Number(event.target.value)
    //TODO: More robust error checking?
    //TODO: Dispatch error message if its an invalid value
    if (!hourlyWages) {
      return
    }
    dispatch(setHourlyWages(hourlyWages))
  }
}

/*
 *  Set the monthlyEarnings state if the new value is a valid estimate
 */
export function handleMonthlyEarnings(event) {
  return (dispatch) => {
    let monthlyEarnings = Number(event.target.value)
    //TODO: More robust error checking?
    //TODO: Dispatch error message if its an invalid value
    if (!monthlyEarnings) {
      return
    }
    dispatch(setMonthlyEarnings(monthlyEarnings))
  }
}

export function asyncSubmitSurvey(Parse, survey) {
  return dispatch => {
    let surveyResponses = {
      age: survey.age,
      sex: survey.sex,
      race: survey.race,
      education: survey.education,
      experience: survey.experience,
      hourlyWages: survey.hourlyWages,
      monthlyEarnings: survey.monthlyEarnings
    }
    let user = Parse.User.current()
    user.save({ characteristics: surveyResponses }).then(function() {}, {
      error(error) {
        console.log('Error: ' + error.code + ' ' + error.message)
      }
    })
  }
}
