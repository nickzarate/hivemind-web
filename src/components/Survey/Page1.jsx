import React from 'react'
import survey from 'assets/survey.json'
import { Form, createFieldClass, controls } from 'react-redux-form'
import { Input } from 'react-bootstrap'

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
  handleChange = (val) => { return () => this.props.onCheckChange(val) };

  render() {
    return (
      <Form onSubmit={ this.props.onSubmit } model="survey">
        <SelectField model="survey.stateOfResidence">
          <Input type="select" label="What state do you live in?">
            { survey.STATE_OPTIONS.map( (option) => ( <option key={ option }>{ option }</option> ) ) }
          </Input>
        </SelectField>
        <RadioField model="survey.gender">
          <label>{ 'Gender' }</label>
          <Input type="radio" label="Male" value="Male" />
          <Input type="radio" label="Female" value="Female" />
        </RadioField>
        <RadioField model="survey.hispanic">
          <label>{ 'Are you of Hispanic, Latino, or Spanish origin?' }</label>
          <Input type="radio" label="No" value="No" />
          <Input type="radio" label="Yes, Mexican, Mexican-American, or Chicano" value="Yes, Mexican, Mexican-American, or Chicano" />
          <Input type="radio" label="Yes, Puerto Rican" value="Yes, Puerto Rican" />
          <Input type="radio" label="Yes, Cuban" value="Yes, Cuban" />
          <Input type="radio" label="Yes, another Hispanic, Latino, or Spanish origin" value="Yes, another Hispanic, Latino, or Spanish origin" />
        </RadioField>
        <label>{ 'What is your race? Check all that apply' }</label>
        <Input onChange={ this.handleChange('white') } type="checkbox" label="White" />
        <Input onChange={ this.handleChange('blackOrAfricanAmerican') } type="checkbox" label="Black or African American" />
        <Input onChange={ this.handleChange('americanIndianOrAlaskaNative') } type="checkbox" label="American Indian or Alaska Native" />
        <Input onChange={ this.handleChange('asianIndian') } type="checkbox" label="Asian Indian" />
        <Input onChange={ this.handleChange('chinese') } type="checkbox" label="Chinese" />
        <Input onChange={ this.handleChange('filipino') } type="checkbox" label="Filipino" />
        <Input onChange={ this.handleChange('japanese') } type="checkbox" label="Japanese" />
        <Input onChange={ this.handleChange('korean') } type="checkbox" label="Korean" />
        <Input onChange={ this.handleChange('vietnamese') } type="checkbox" label="Vietnamese" />
        <Input onChange={ this.handleChange('otherAsian') } type="checkbox" label="Other Asian" />
        <Input onChange={ this.handleChange('pacificIslander') } type="checkbox" label="Pacific Islander" />
        <TextField model="survey.race.other">
          <Input type="text" label="Other Race (Fill in)" placeholder="Other Race" />
        </TextField>
        <RadioField model="survey.isBornInUS">
          <label>{ 'Were you born in the United States?' }</label>
          <Input type="radio" label="Yes" value="Yes" />
          <Input type="radio" label="No" value="No" />
        </RadioField>
        <RadioField model="survey.isEnglishPrimaryLanguage">
          <label>{ 'Is English the primary language spoken at home?' }</label>
          <Input type="radio" label="Yes" value="Yes" />
          <Input type="radio" label="No" value="No" />
        </RadioField>
        <button type="submit">{ 'Continue' }</button>
      </Form>
    )
  }
}
