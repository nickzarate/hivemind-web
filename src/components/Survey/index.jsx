import Parse from 'parse'
import React from 'react'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import survey from 'assets/survey.json'
import Selector from 'components/Lib/Selector'

export default class Survey extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  componentDidMount() {
    if (!Parse.User.current()) { this.props.push('/') }
  }

  push(path) {
    return () => this.props.push(path)
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
    this.props.push('/home')
  }

  ageSelector = (ref) => this.ageSelector = ref;
  sexSelector = (ref) => this.sexSelector = ref;
  raceSelector = (ref) => this.raceSelector = ref;
  educationSelector = (ref) => this.educationSelector = ref;
  experienceSelector = (ref) => this.experienceSelector = ref;
  occupationSelector = (ref) => this.occupationSelector = ref;

  render() {
    return (
      <div>
        <h1>{ 'Survey' }</h1>
        <Selector
          ref={ this.ageSelector }
          title={ 'Age' }
          options={ survey.AGE_OPTIONS }
        />
        <Selector
          ref={ this.sexSelector }
          title={ 'Sex' }
          options={ survey.SEX_OPTIONS }
        />
        <Selector
          ref={ this.raceSelector }
          title={ 'Race' }
          options={ survey.RACE_OPTIONS }
        />
        <Selector
          ref={ this.educationSelector }
          title={ 'Education' }
          options={ survey.EDUCATION_OPTIONS }
        />
        <Selector
          ref={ this.occupationSelector }
          title={ 'Occupation' }
          options={ survey.OCCUPATION_OPTIONS }
        />
        <Selector
          ref={ this.experienceSelector }
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
        <button onClick={ this.handleSubmit }>{ 'Submit and Continue' }</button>
      </div>
    )
  }
}
