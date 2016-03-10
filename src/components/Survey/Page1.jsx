import React from 'react'
import survey from 'assets/survey.json'
import { Form, createFieldClass, controls } from 'react-redux-form'
import { Input } from 'react-bootstrap'
import { toBool } from 'toolbox/parser'

const CheckField = createFieldClass({
  'Input': (props) => ({
    onChange: () => { props.changeValue(props.val, props.checked) }
  })
})

const RadioField = createFieldClass({
  'Input': controls.text
})

const SelectField = createFieldClass({
  'Input': controls.select
})

export default class SurveyPage1 extends React.Component {
  render() {
    const { changeValue, survey: { race } } = this.props
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
        <CheckField model="survey.race.white">
          <Input changeValue={ changeValue } val="white" type="checkbox" checked={ race.white } label="White" />
        </CheckField>
        <CheckField model="survey.race.blackOrAfricanAmerican">
          <Input changeValue={ changeValue } val="blackOrAfricanAmerican" type="checkbox" checked={ race.blackOrAfricanAmerican } label="Black or African American" />
        </CheckField>
        <CheckField model="survey.race.americanIndianOrAlaskaNative">
          <Input changeValue={ changeValue } val="americanIndianOrAlaskaNative" type="checkbox" checked={ race.americanIndianOrAlaskaNative } label="American Indian or Alaska Native" />
        </CheckField>
        <CheckField model="survey.race.asianIndian">
          <Input changeValue={ changeValue } val="asianIndian" type="checkbox" checked={ race.asianIndian } label="Asian Indian" />
        </CheckField>
        <CheckField model="survey.race.chinese">
          <Input changeValue={ changeValue } val="chinese" type="checkbox" checked={ race.chinese } label="Chinese" />
        </CheckField>
        <CheckField model="survey.race.filipino">
          <Input changeValue={ changeValue } val="filipino" type="checkbox" checked={ race.filipino } label="Filipino" />
        </CheckField>
        <CheckField model="survey.race.japanese">
          <Input changeValue={ changeValue } val="japanese" type="checkbox" checked={ race.japanese } label="Japanese" />
        </CheckField>
        <CheckField model="survey.race.korean">
          <Input changeValue={ changeValue } val="korean" type="checkbox" checked={ race.korean } label="Korean" />
        </CheckField>
        <CheckField model="survey.race.vietnamese">
          <Input changeValue={ changeValue } val="vietnamese" type="checkbox" checked={ race.vietnamese } label="Vietnamese" />
        </CheckField>
        <CheckField model="survey.race.otherAsian">
          <Input changeValue={ changeValue } val="otherAsian" type="checkbox" checked={ race.otherAsian } label="Other Asian" />
        </CheckField>
        <CheckField model="survey.race.pacificIslander">
          <Input changeValue={ changeValue } val="pacificIslander" type="checkbox" checked={ race.pacificIslander } label="Pacific Islander" />
        </CheckField>
        <RadioField model="survey.race.other">
          <Input type="text" label="Other Race (Fill in)" placeholder="Other Race" />
        </RadioField>
        <RadioField model="survey.isBornInUS" parser={ toBool }>
          <label>{ 'Were you born in the United States?' }</label>
          <Input type="radio" label="Yes" value="true" />
          <Input type="radio" label="No" value="false" />
        </RadioField>
        <RadioField model="survey.isEnglishPrimaryLanguage" parser={ toBool }>
          <label>{ 'Is English the primary language spoken at home?' }</label>
          <Input type="radio" label="Yes" value="true" />
          <Input type="radio" label="No" value="false" />
        </RadioField>
        <button type="submit">{ 'Continue' }</button>
      </Form>
    )
  }
}
