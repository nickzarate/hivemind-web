import React from 'react'
import { createFieldClass, controls } from 'react-redux-form'
import { Input } from 'react-bootstrap'
import { makeNumber } from 'toolbox/parser'

const InputField = createFieldClass({
  'Input': controls.text
})

export default class SurveyPage4 extends React.Component {
  render() {
    return (
      <form>
        <InputField model="survey.highSchoolGPA" parser={ makeNumber }>
          <label>{ 'What was your high school GPA? (If you do not know, give your best guess)' }</label>
          <Input type="text" placeholder="High School GPA" />
        </InputField>
        <InputField model="survey.collegeGPA" parser={ makeNumber }>
          <label>{ 'What was your College GPA? (If you do not know, give your best guess)' }</label>
          <Input type="text" placeholder="College GPA" />
        </InputField>
        <InputField model="survey.fathersEducation" parser={ makeNumber }>
          <label>{ 'What is the highest level of education obtained by your father?' }</label>
          <Input type="radio" value="Less than a high school degree" label="Less than a high school degree" />
          <Input type="radio" value="High school degree" label="High school degree" />
          <Input type="radio" value="Associate’s degree or technical degree (2-year college degree)" label="Associate’s degree or technical degree (2-year college degree)" />
          <Input type="radio" value="Bachelor’s degree (4-year college degree)" label="Bachelor’s degree (4-year college degree)" />
          <Input type="radio" value="Master’s degree (2-year graduate degree)" label="Master’s degree (2-year graduate degree)" />
          <Input type="radio" value="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" label="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" />
          <Input type="radio" value="Post-doctoral degree" label="Post-doctoral degree" />
        </InputField>
        <InputField model="survey.mothersEducation" parser={ makeNumber }>
          <label>{ 'What is the highest level of education obtained by your mother?' }</label>
          <Input type="radio" value="Less than a high school degree" label="Less than a high school degree" />
          <Input type="radio" value="High school degree" label="High school degree" />
          <Input type="radio" value="Associate’s degree or technical degree (2-year college degree)" label="Associate’s degree or technical degree (2-year college degree)" />
          <Input type="radio" value="Bachelor’s degree (4-year college degree)" label="Bachelor’s degree (4-year college degree)" />
          <Input type="radio" value="Master’s degree (2-year graduate degree)" label="Master’s degree (2-year graduate degree)" />
          <Input type="radio" value="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" label="PhD, MD (Doctor), or JD (Lawyer) (3- to 6-year graduate degree)" />
          <Input type="radio" value="Post-doctoral degree" label="Post-doctoral degree" />
        </InputField>
        <button onClick={ this.props.onClick }>{ 'Continue' }</button>
      </form>
    )
  }
}
