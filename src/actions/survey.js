import { SUBMIT_SURVEY, SET_HOURLY_WAGES, SET_MONTHLY_EARNINGS } from 'constants'

export function setUserCharacteristics(surveyResponses) {
  return {
    type: SUBMIT_SURVEY,
    payload: {
      x1: surveyResponses.x1
    }
  }
}

export function setHourlyWages(hourlyWages) {
  return {
    type: SET_HOURLY_WAGES,
    payload: {
      hourlyWages: hourlyWages
    }
  }
}

export function setMonthlyEarnings(monthlyEarnings) {
  return {
    type: SET_MONTHLY_EARNINGS,
    payload: {
      monthlyEarnings: monthlyEarnings
    }
  }
}

/*
 *  Set the hourlyWages state if the new value is a valid estimate
 */
export function handleHourlyWages(event) {
  return (dispatch) => {
    let hourlyWages = Number(event.target.value)
    //TODO: More robust error checking?
    //TODO: Dispatch error message if its an invalid number
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
    //TODO: Dispatch error message if its an invalid number
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
