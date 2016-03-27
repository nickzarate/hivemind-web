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

export default class SurveyPage2 extends React.Component {
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

        <RadioField model="forms.survey.isLunchReducedPrice">
          <label>{ 'Have you ever received free or reduced price lunch where you attended school?' }</label>
          <Input type="radio" value="Yes" label="Yes" active />
          <Input type="radio" value="No" label="No" />
          <Input type="radio" value="I don't know" label="I don't know" />
        </RadioField>
        { this.displayErrors('isLunchReducedPrice') }

        <label>{ 'Birthdate' }</label>
        <TextField model="forms.survey.birthdate.month" parser={ toNum }>
          <Input type="text" placeholder="MM" value={ survey.birthdate.month } />
        </TextField>
        { this.displayErrors('birthdate.month') }

        <TextField model="forms.survey.birthdate.day" parser={ toNum }>
          <Input type="text" placeholder="DD" value={ survey.birthdate.day } />
        </TextField>
        { this.displayErrors('birthdate.day') }

        <TextField model="forms.survey.birthdate.year" parser={ toNum }>
          <Input type="text" placeholder="YYYY" value={ survey.birthdate.year } />
        </TextField>
        { this.displayErrors('birthdate.year') }

        <RadioField model="forms.survey.isStudent">
          <label>{ 'Are you currently a student?' }</label>
          <Input type="radio" value="Yes" label="Yes" active />
          <Input type="radio" value="No" label="No" />
        </RadioField>
        { this.displayErrors('isStudent') }

        <RadioField model="forms.survey.isEmployed">
          <label>{ 'Are you currently employed?' }</label>
          <Input type="radio" value="Yes" label="Yes" active />
          <Input type="radio" value="No" label="No" />
        </RadioField>
        { this.displayErrors('isEmployed') }

        <TextField model="forms.survey.annualSalary" parser={ toNum }>
          <label>{ 'What is your current annual salary, rounded to the nearest thousand (for example $25,325 would simply be $25,000)' }</label>
          <Input type="text" placeholder="Annual Salary" value={ survey.annualSalary } />
        </TextField>
        { this.displayErrors('annualSalary') }

        <TextField model="forms.survey.workHoursPerWeek" parser={ toNum }>
          <label>{ 'About how many hours per week do you work?' }</label>
          <Input type="text" placeholder="Hours" value={ survey.workHoursPerWeek } />
        </TextField>
        { this.displayErrors('workHoursPerWeek') }

        <TextField model="forms.survey.yearsOfWorkExperienceOverall" parser={ toNum }>
          <label>{ 'How many years of work experience do you have overall (counting all time employed)?' }</label>
          <Input type="text" placeholder="Years" value={ survey.yearsOfWorkExperienceOverall } />
        </TextField>
        { this.displayErrors('yearsOfWorkExperienceOverall') }

        <button type="submit">{ 'Continue' }</button>
      </Form>
    )
  }
}
