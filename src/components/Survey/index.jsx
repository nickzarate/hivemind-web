import Parse from 'parse'
import React from 'react'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { survey } from 'assets'
import Selector from 'components/Lib/Selector'

export default class SurveyComp extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  handleSubmit() {
    let surveyResponses = {
      age: this.ageSelector.selector.value,
      sex: this.sexSelector.selector.value,
      race: this.raceSelector.selector.value,
      education: this.educationSelector.selector.value,
      experience: this.experienceSelector.selector.value,
      occupation: this.occupationSelector.selector.value,
      hourlyWages: this.props.survey.hourlyWages,
      monthlyEarnings: this.props.survey.monthlyEarnings
    }
    this.props.actions.asyncSubmitSurvey(Parse, surveyResponses)
    this.props.pushPath('/home')
  }

  render() {
    console.log(this)
    return (
      <div>
        <h1>{ 'Survey' }</h1>
        <Selector
          ref={ (ref) => this.ageSelector = ref }
          title={ 'Age' }
          options={ survey.AGE_OPTIONS }
        />
        <Selector
          ref={ (ref) => this.sexSelector = ref }
          title={ 'Sex' }
          options={ survey.SEX_OPTIONS }
        />
        <Selector
          ref={ (ref) => this.raceSelector = ref }
          title={ 'Race' }
          options={ survey.RACE_OPTIONS }
        />
        <Selector
          ref={ (ref) => this.educationSelector = ref }
          title={ 'Education' }
          options={ survey.EDUCATION_OPTIONS }
        />
        <Selector
          ref={ (ref) => this.occupationSelector = ref }
          title={ 'Occupation' }
          options={ survey.OCCUPATION_OPTIONS }
        />
        <Selector
          ref={ (ref) => this.experienceSelector = ref }
          title={ 'Experience' }
          options={ survey.EXPERIENCE_OPTIONS }
        />
        <input
          onChange={ this.props.actions.handleHourlyWages }
          placeholder="Hourly Wages"
        />
        <input
          onChange={ this.props.actions.handleMonthlyEarnings }
          placeholder="Monthly Earnings"
        />
        <button onClick={ this.handleSubmit }>{ 'Submit' }</button>
        <button onClick={ this.pushPath('/home') }>{ 'Continue' }</button>
      </div>
    )
  }
}
