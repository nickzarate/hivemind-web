import React from 'react'
import { Form, getField, createFieldClass, controls } from 'react-redux-form'
import { Input } from 'react-bootstrap'
import { toNum } from 'toolbox/parser'

const TextField = createFieldClass({
  'Input': controls.text
})
const RadioField = createFieldClass({
  'Input': controls.radio
})

export default class SurveyPage4 extends React.Component {
  constructor(props) {
    super(props)
    this.displayErrors = this.displayErrors.bind(this)
  }

  displayErrors(state) {
    var errors = getField(this.props.surveyForm, state).errors
    return Object.keys(errors).map(
      (error, index) => (
        <p key={ index }>{ errors[error] }</p>
      )
    )
  }

  handleChange = (val) => { return () => this.props.onCheckChange(val) };

  render() {
    const { survey } = this.props
    return (
      <Form onSubmit={ this.props.onSubmit } model="survey">

        <TextField model="survey.highSchoolGPA" parser={ toNum }>
          <label>{ 'What was your high school GPA? (If you do not know, give your best guess)' }</label>
          <Input type="text" placeholder="High School GPA" value={ survey.highSchoolGPA } />
        </TextField>
        { this.displayErrors('highSchoolGPA') }

        <TextField model="survey.collegeGPA" parser={ toNum }>
          <label>{ 'What was your College GPA? (If you do not know, give your best guess)' }</label>
          <Input type="text" placeholder="College GPA" value={ survey.collegeGPA } />
        </TextField>
        { this.displayErrors('collegeGPA') }

        <RadioField model="survey.fathersEducation">
          <label>{ 'What is the highest level of education obtained by your father?' }</label>
          <Input type="radio" value="Less than a high school degree" label="Less than a high school degree" active />
          <Input type="radio" value="High school degree" label="High school degree" />
          <Input type="radio" value="Associate’s degree or technical degree (2-year college degree)" label="Associate’s degree or technical degree (2-year college degree)" />
          <Input type="radio" value="Bachelor’s degree (4-year college degree)" label="Bachelor’s degree (4-year college degree)" />
          <Input type="radio" value="Master’s degree (2-year graduate degree)" label="Master’s degree (2-year graduate degree)" />
          <Input type="radio" value="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" label="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" />
          <Input type="radio" value="Post-doctoral degree" label="Post-doctoral degree" />
        </RadioField>
        { this.displayErrors('fathersEducation') }
        <Input onChange={ this.handleChange('fathersEducationIsGuess') } type="checkbox" label="This is a guess" checked={ survey.fathersEducationIsGuess } />

        <RadioField model="survey.mothersEducation">
          <label>{ 'What is the highest level of education obtained by your mother?' }</label>
          <Input type="radio" value="Less than a high school degree" label="Less than a high school degree" active />
          <Input type="radio" value="High school degree" label="High school degree" />
          <Input type="radio" value="Associate’s degree or technical degree (2-year college degree)" label="Associate’s degree or technical degree (2-year college degree)" />
          <Input type="radio" value="Bachelor’s degree (4-year college degree)" label="Bachelor’s degree (4-year college degree)" />
          <Input type="radio" value="Master’s degree (2-year graduate degree)" label="Master’s degree (2-year graduate degree)" />
          <Input type="radio" value="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" label="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" />
          <Input type="radio" value="Post-doctoral degree" label="Post-doctoral degree" />
        </RadioField>
        { this.displayErrors('mothersEducation') }
        <Input onChange={ this.handleChange('mothersEducationIsGuess') } type="checkbox" label="This is a guess" checked={ mothersEducationIsGuess } />

        <button type="submit">{ 'Continue' }</button>
      </Form>
    )
  }
}
