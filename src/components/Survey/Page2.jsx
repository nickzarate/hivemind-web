import React from 'react'
import { Form, createFieldClass, controls } from 'react-redux-form'
import { Input } from 'react-bootstrap'
import { toNum } from 'toolbox/parser'

const TextField = createFieldClass({
  'Input': controls.text
})

export default class SurveyPage2 extends React.Component {
  render() {
    return (
      <Form onSubmit={ this.props.onSubmit } model="survey">
        <TextField model="survey.isLunchReducedPrice">
          <label>{ 'Have you ever received free or reduced price lunch where you attended school?' }</label>
          <Input type="radio" value="Yes" label="Yes" />
          <Input type="radio" value="No" label="No" />
          <Input type="radio" value="I don't know" label="I don't know" />
        </TextField>
        <label>{ 'Birthdate' }</label>
        <TextField model="survey.birthday.month" parser={ toNum }>
          <Input type="text" placeholder="MM" />
        </TextField>
        <TextField model="survey.birthday.day" parser={ toNum }>
          <Input type="text" placeholder="DD" />
        </TextField>
        <TextField model="survey.birthday.year" parser={ toNum }>
          <Input type="text" placeholder="YYYY" />
        </TextField>
        <TextField model="survey.isStudent">
          <label>{ 'Are you currently a student?' }</label>
          <Input type="radio" value="Yes" label="Yes" />
          <Input type="radio" value="No" label="No" />
        </TextField>
        <TextField model="survey.isEmployed">
          <label>{ 'Are you currently employed?' }</label>
          <Input type="radio" value="Yes" label="Yes" />
          <Input type="radio" value="No" label="No" />
        </TextField>
        <TextField model="survey.annualSalary" parser={ toNum }>
          <label>{ 'What is your current annual salary, rounded to the nearest thousand (for example $25,325 would simply be $25,000)' }</label>
          <Input type="text" placeholder="Annual Salary" />
        </TextField>
        <TextField model="survey.workHoursPerWeek" parser={ toNum }>
          <label>{ 'About how many hours per week do you work?' }</label>
          <Input type="text" placeholder="Hours" />
        </TextField>
        <TextField model="survey.yearsOfWorkExperienceOverall" parser={ toNum }>
          <label>{ 'How many years of work experience do you have overall (counting all time employed)?' }</label>
          <Input type="text" placeholder="Years" />
        </TextField>
        <button type="submit">{ 'Continue' }</button>
      </Form>
    )
  }
}
