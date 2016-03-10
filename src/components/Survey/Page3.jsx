import React from 'react'
import { Form, createFieldClass, controls } from 'react-redux-form'
import { Input } from 'react-bootstrap'
import { toNum } from 'toolbox/parser'

const InputField = createFieldClass({
  'Input': controls.text
})

export default class SurveyPage3 extends React.Component {
  render() {
    return (
      <Form onSubmit={ this.props.onSubmit } model="survey">
        <InputField model="survey.yearsOfWorkExperienceInCurrentCareer" parser={ toNum }>
          <label>{ 'How many years of work experience do you have in your current career?' }</label>
          <Input type="text" placeholder="Years" />
        </InputField>
        <InputField model="survey.yearsOfCompletedSchooling" parser={ toNum }>
          <label>{ 'Current years of completed schooling' }</label>
          <Input type="text" placeholder="Years" />
          { 'As a reference see the following...' }
        </InputField>
        <InputField model="survey.intendedYearsOfCompletedSchooling" parser={ toNum }>
          <label>{ 'How many years of schooling do you INTEND to complete?' }</label>
          <Input type="text" placeholder="Years" />
          { 'As a reference see the following...' }
        </InputField>
        <InputField model="survey.highestEducationDegree">
          <label>{ 'What is your highest earned degree in education?' }</label>
          <Input type="radio" value="Less than a high school degree" label="Less than a high school degree" />
          <Input type="radio" value="High school degree" label="High school degree" />
          <Input type="radio" value="Associate’s degree or technical degree (2-year college degree)" label="Associate’s degree or technical degree (2-year college degree)" />
          <Input type="radio" value="Bachelor’s degree (4-year college degree)" label="Bachelor’s degree (4-year college degree)" />
          <Input type="radio" value="Master’s degree (2-year graduate degree)" label="Master’s degree (2-year graduate degree)" />
          <Input type="radio" value="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" label="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" />
          <Input type="radio" value="Post-doctoral degree" label="Post-doctoral degree" />
        </InputField>
        <InputField model="survey.intendedHighestEducationDegree">
          <label>{ 'What is the highest degree you plan on earning?' }</label>
          <Input type="radio" value="Less than a high school degree" label="Less than a high school degree" />
          <Input type="radio" value="High school degree" label="High school degree" />
          <Input type="radio" value="Associate’s degree or technical degree (2-year college degree)" label="Associate’s degree or technical degree (2-year college degree)" />
          <Input type="radio" value="Bachelor’s degree (4-year college degree)" label="Bachelor’s degree (4-year college degree)" />
          <Input type="radio" value="Master’s degree (2-year graduate degree)" label="Master’s degree (2-year graduate degree)" />
          <Input type="radio" value="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" label="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" />
          <Input type="radio" value="Post-doctoral degree" label="Post-doctoral degree" />
        </InputField>
        <button type="submit">{ 'Continue' }</button>
      </Form>
    )
  }
}
