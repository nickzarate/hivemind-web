import React from 'react'
import { Form, createFieldClass, controls } from 'react-redux-form'
import { Input } from 'react-bootstrap'
import { toNum } from 'toolbox/parser'

const InputField = createFieldClass({
  'Input': controls.text
})

export default class SurveyPage2 extends React.Component {
  render() {
    return (
      <Form onSubmit={ this.props.onSubmit } model="survey">
        <InputField model="survey.isLunchReducedPrice">
          <label>{ 'Have you ever received free or reduced price lunch where you attended school?' }</label>
          <Input type="radio" value="Yes" label="Yes" />
          <Input type="radio" value="No" label="No" />
          <Input type="radio" value="I don't know" label="I don't know" />
        </InputField>
        <InputField model="survey.isStudent">
          <label>{ 'Are you currently a student?' }</label>
          <Input type="radio" value="Yes" label="Yes" />
          <Input type="radio" value="No" label="No" />
        </InputField>
        <InputField model="survey.isEmployed">
          <label>{ 'Are you currently employed?' }</label>
          <Input type="radio" value="Yes" label="Yes" />
          <Input type="radio" value="No" label="No" />
        </InputField>
        <InputField model="survey.annualSalary" parser={ toNum }>
          <label>{ 'What is your current annual salary, rounded to the nearest thousand (for example $25,325 would simply be $25,000)' }</label>
          <Input type="text" placeholder="Annual Salary" />
        </InputField>
        <InputField model="survey.workHoursPerWeek" parser={ toNum }>
          <label>{ 'About how many hours per week do you work?' }</label>
          <Input type="text" placeholder="Hours" />
        </InputField>
        <InputField model="survey.yearsOfWorkExperienceOverall" parser={ toNum }>
          <label>{ 'How many years of work experience do you have overall (counting all time employed)?' }</label>
          <Input type="text" placeholder="Years" />
        </InputField>
        <button type="submit">{ 'Continue' }</button>
      </Form>
    )
  }
}
