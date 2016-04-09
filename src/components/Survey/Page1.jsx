import React from 'react'
import survey from 'assets/survey.json'
import { Form, getField, createFieldClass, controls } from 'react-redux-form'
import { Input } from 'react-bootstrap'
Input.displayName = 'Input'
const TextField = createFieldClass({
  'Input': controls.text
})
const RadioField = createFieldClass({
  'Input': controls.radio
})
const SelectField = createFieldClass({
  'Input': controls.select
})

export default class SurveyPage1 extends React.Component {
  constructor() {
    super()
    this.displayErrors = this.displayErrors.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  displayErrors(state) {
    let errors = getField(this.props.surveyForm, state).errors
    return Object.keys(errors).map(
      (error, index) => (
        <p key={ index }>{ errors[error] }</p>
      )
    )
  }

  handleChange(val) {
    return () => this.props.onCheckChange(val)
  }

  render() {
    const { race } = this.props.survey
    return (
      <Form onSubmit={ this.props.onSubmit } model="forms.survey">

        <SelectField model="forms.survey.stateOfResidence">
          <Input type="select" label="What state do you live in?" defaultValue={ race.stateOfResidence }>
            { survey.STATE_OPTIONS.map((option) => ( <option key={ option } value={ option }>{ option }</option> )) }
          </Input>
        </SelectField>
        { this.displayErrors('stateOfResidence') }

        <RadioField model="forms.survey.gender">
          <label>{ 'Gender' }</label>
          <Input type="radio" label="Male" value="Male" active />
          <Input type="radio" label="Female" value="Female" />
        </RadioField>
        { this.displayErrors('gender') }

        <RadioField model="forms.survey.hispanic">
          <label>{ 'Are you of Hispanic, Latino, or Spanish origin?' }</label>
          <Input type="radio" label="No" value="No" active />
          <Input type="radio" label="Yes, Mexican, Mexican-American, or Chicano" value="Yes, Mexican, Mexican-American, or Chicano" />
          <Input type="radio" label="Yes, Puerto Rican" value="Yes, Puerto Rican" />
          <Input type="radio" label="Yes, Cuban" value="Yes, Cuban" />
          <Input type="radio" label="Yes, another Hispanic, Latino, or Spanish origin" value="Yes, another Hispanic, Latino, or Spanish origin" />
        </RadioField>
        { this.displayErrors('hispanic') }

        <label>{ 'What is your race? Check all that apply' }</label>
        <Input onChange={ this.handleChange('white') } type="checkbox" label="White" checked={ race.white } />
        <Input onChange={ this.handleChange('blackOrAfricanAmerican') } type="checkbox" label="Black or African American" checked={ race.blackOrAfricanAmerican } />
        <Input onChange={ this.handleChange('americanIndianOrAlaskaNative') } type="checkbox" label="American Indian or Alaska Native" checked={ race.americanIndianOrAlaskaNative } />
        <Input onChange={ this.handleChange('asianIndian') } type="checkbox" label="Asian Indian" checked={ race.asianIndian } />
        <Input onChange={ this.handleChange('chinese') } type="checkbox" label="Chinese" checked={ race.chinese } />
        <Input onChange={ this.handleChange('filipino') } type="checkbox" label="Filipino" checked={ race.filipino } />
        <Input onChange={ this.handleChange('japanese') } type="checkbox" label="Japanese" checked={ race.japanese } />
        <Input onChange={ this.handleChange('korean') } type="checkbox" label="Korean" checked={ race.korean } />
        <Input onChange={ this.handleChange('vietnamese') } type="checkbox" label="Vietnamese" checked={ race.vietnamese } />
        <Input onChange={ this.handleChange('otherAsian') } type="checkbox" label="Other Asian" checked={ race.otherAsian } />
        <Input onChange={ this.handleChange('pacificIslander') } type="checkbox" label="Pacific Islander" checked={ race.pacificIslander } />
        <TextField model="forms.survey.race.other">
          <Input type="text" label="Other Race (Fill in)" placeholder="Other Race" value={ race.other } />
        </TextField>

        <RadioField model="forms.survey.isBornInUS">
          <label>{ 'Were you born in the United States?' }</label>
          <Input type="radio" label="Yes" value="Yes" active />
          <Input type="radio" label="No" value="No" />
        </RadioField>
        { this.displayErrors('isBornInUS') }

        <RadioField model="forms.survey.isEnglishPrimaryLanguage">
          <label>{ 'Is English the primary language spoken at home?' }</label>
          <Input type="radio" label="Yes" value="Yes" active />
          <Input type="radio" label="No" value="No" />
        </RadioField>
        { this.displayErrors('isEnglishPrimaryLanguage') }

        <button type="submit">{ 'Continue' }</button>
      </Form>
    )
  }
}
