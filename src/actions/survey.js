import { SET_HOURLY_WAGES, SET_MONTHLY_EARNINGS } from './constants'
import { createAction } from 'redux-actions'

export const setHourlyWages = createAction(SET_HOURLY_WAGES, hourlyWages => hourlyWages)
export const setMonthlyEarnings = createAction(SET_MONTHLY_EARNINGS, monthlyEarnings => monthlyEarnings)

/*
 *  Submit the one time only pre-survey
 *  TODO: Make everything abstract
 */
export function asyncSubmitSurvey(Parse, survey) {
  return () => {
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
    user.save({ characteristics: surveyResponses })
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
