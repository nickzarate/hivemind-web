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

export default class SurveyPage3 extends React.Component {
  constructor(props) {
    super(props)
    this.displayErrors = this.displayErrors.bind(this)
  }

  displayErrors(state) {
    let errors = getField(this.props.surveyForm, state).errors
    return Object.keys(errors).map(
      (error, index) => (
        <p key={ index }>{ errors[error] }</p>
      )
    )
  }

  render() {
    const { survey } = this.props
    return (
      <Form onSubmit={ this.props.onSubmit } model="forms.survey">

        <TextField model="forms.survey.yearsOfWorkExperienceInCurrentCareer" parser={ toNum }>
          <label>{ 'How many years of work experience do you have in your current career?' }</label>
          <Input type="text" placeholder="Years" value={ survey.yearsOfWorkExperienceInCurrentCareer } />
        </TextField>
        { this.displayErrors('yearsOfWorkExperienceInCurrentCareer') }

        <TextField model="forms.survey.yearsOfCompletedSchooling" parser={ toNum }>
          <label>{ 'Current years of completed schooling' }</label>
          <Input type="text" placeholder="Years" value={ survey.yearsOfCompletedSchooling } />
          { 'As a reference see the following...' }
        </TextField>
        { this.displayErrors('yearsOfCompletedSchooling') }

        <TextField model="forms.survey.intendedYearsOfCompletedSchooling" parser={ toNum }>
          <label>{ 'How many years of schooling do you INTEND to complete?' }</label>
          <Input type="text" placeholder="Years" value={ survey.intendedYearsOfCompletedSchooling } />
          { 'As a reference see the following...' }
        </TextField>
        { this.displayErrors('intendedYearsOfCompletedSchooling') }

        <RadioField model="forms.survey.highestEducationDegree">
          <label>{ 'What is your highest earned degree in education?' }</label>
          <Input type="radio" value="Less than a high school degree" label="Less than a high school degree" active />
          <Input type="radio" value="High school degree" label="High school degree" />
          <Input type="radio" value="Associate’s degree or technical degree (2-year college degree)" label="Associate’s degree or technical degree (2-year college degree)" />
          <Input type="radio" value="Bachelor’s degree (4-year college degree)" label="Bachelor’s degree (4-year college degree)" />
          <Input type="radio" value="Master’s degree (2-year graduate degree)" label="Master’s degree (2-year graduate degree)" />
          <Input type="radio" value="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" label="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" />
          <Input type="radio" value="Post-doctoral degree" label="Post-doctoral degree" />
        </RadioField>
        { this.displayErrors('highestEducationDegree') }

        <RadioField model="forms.survey.intendedHighestEducationDegree">
          <label>{ 'What is the highest degree you plan on earning?' }</label>
          <Input type="radio" value="Less than a high school degree" label="Less than a high school degree" active />
          <Input type="radio" value="High school degree" label="High school degree" />
          <Input type="radio" value="Associate’s degree or technical degree (2-year college degree)" label="Associate’s degree or technical degree (2-year college degree)" />
          <Input type="radio" value="Bachelor’s degree (4-year college degree)" label="Bachelor’s degree (4-year college degree)" />
          <Input type="radio" value="Master’s degree (2-year graduate degree)" label="Master’s degree (2-year graduate degree)" />
          <Input type="radio" value="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" label="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" />
          <Input type="radio" value="Post-doctoral degree" label="Post-doctoral degree" />
        </RadioField>
        { this.displayErrors('intendedHighestEducationDegree') }

        <button type="submit">{ 'Continue' }</button>
      </Form>
    )
  }
}
