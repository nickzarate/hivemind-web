import React from 'react'
import survey from 'assets/survey.json'
import { Field, createFieldClass, controls } from 'react-redux-form'
import { Input } from 'react-bootstrap'

// const RadioField = createFieldClass({
//   'Input2': controls.text
// })

const CheckField = createFieldClass({
  'Input': controls.checkbox
})

export default class SurveyPage1 extends React.Component {
  render() {
    return (
      <form>
        
        <CheckField model="survey.race.americanIndianOrAlaskaNative">
          <Input type="checkbox" checked={ this.props.race.americanIndianOrAlaskaNative } label="American Indian or Alaska Native" />
        </CheckField>
        
        <button onClick={ this.props.onClick }>{ 'Continue' }</button>
      </form>
    )
  }
}

// <Field model="survey.stateOfResidence">
//           <label>{ 'What state do you live in?' }</label>
//           <select>
//             { survey.STATE_OPTIONS.map( (option) => ( <option key={ option }>{ option }</option> ) ) }
//           </select>
//         </Field>
//         <RadioField model="survey.gender">
//           <label>{ 'Gender' }</label>
//           <label htmlFor="survey-gender-male">
//             <Input name="gender" type="radio" value="Male" id="survey-gender-male" />
//             { 'Male' }
//           </label>
//           <label htmlFor="survey-gender-female">
//             <Input name="gender" type="radio" value="Female" id="survey-gender-female" />
//             { 'Female' }
//           </label>
//           <label htmlFor="survey-gender-other">
//             <Input name="gender" type="radio" value="Other" id="survey-gender-other" />
//             { 'Other' }
//           </label>
//         </RadioField>
//         <RadioField model="survey.hispanic">
//           <label>{ 'Are you of Hispanic, Latino, or Spanish origin?' }</label>
//           <label htmlFor="survey-hispanic-no">
//             <Input name="hispanic" type="radio" value="No" id="survey-hispanic-no" />
//             { 'No' }
//           </label>
//           <label htmlFor="survey-hispanic-mexican">
//             <Input name="hispanic" type="radio" value="Mexican, Mexican American, or Chicano" id="survey-hispanic-mexican" />
//             { 'Yes, Mexican, Mexican American, or Chicano' }
//           </label>
//           <label htmlFor="survey-hispanic-puerto">
//             <Input name="hispanic" type="radio" value="Puerto Rican" id="survey-hispanic-puerto" />
//             { 'Yes, Puerto Rican' }
//           </label>
//           <label htmlFor="survey-hispanic-cuban">
//             <Input name="hispanic" type="radio" value="Cuban" id="survey-hispanic-cuban" />
//             { 'Yes, Cuban' }
//           </label>
//           <label htmlFor="survey-hispanic-other">
//             <Input name="hispanic" type="radio" value="Another Hispanic, Latino, or Spanish origin" id="survey-hispanic-other" />
//             { 'Yes, another Hispanic, Latino, or Spanish origin' }
//           </label>
//         </RadioField>
//         <label>{ 'What is your race? Check all that apply' }</label>
//         <RadioField model="survey.race.white">
//           <label htmlFor="survey-race-white">
//             <Input name="race" type="checkbox" value="White" id="survey-race-white" />
//             { 'White' }
//           </label>
//         </RadioField>
//         <RadioField model="survey.race.blackOrAfricanAmerican">
//           <Input name="race" label="Black or African American" type="checkbox" id="survey-race-black" />
//         </RadioField>


// <RadioField model="survey.race.other">
//           <label htmlFor="survey-race-indian">
//             <Input name="race" type="checkbox" value="Asian Indian" id="survey-race-indian" />
//             { 'Asian Indian' }
//           </label>
//           <label htmlFor="survey-race-chinese">
//             <Input name="race" type="checkbox" value="Chinese" id="survey-race-chinese" />
//             { 'Chinese' }
//           </label>
//           <label htmlFor="survey-race-filipino">
//             <Input name="race" type="checkbox" value="Filipino" id="survey-race-filipino" />
//             { 'Filipino' }
//           </label>
//           <label htmlFor="survey-race-japanese">
//             <Input name="race" type="checkbox" value="Japanese" id="survey-race-japanese" />
//             { 'Japanese' }
//           </label>
//           <label htmlFor="survey-race-korean">
//             <Input name="race" type="checkbox" value="Korean" id="survey-race-korean" />
//             { 'Korean' }
//           </label>
//           <label htmlFor="survey-race-vietnamese">
//             <Input name="race" type="checkbox" value="Vietnamese" id="survey-race-vietnamese" />
//             { 'Vietnamese' }
//           </label>
//           <label htmlFor="survey-race-other-asian">
//             <Input name="race" type="checkbox" value="Other Asian" id="survey-race-other-asian" />
//             { 'Other Asian' }
//           </label>
//           <label htmlFor="survey-race-pacific">
//             <Input name="race" type="checkbox" value="Pacific Islander" id="survey-race-pacific" />
//             { 'Pacific Islander' }
//           </label>
//           <label htmlFor="survey-race-other">
//             <Input name="race" type="checkbox" value="Other Race" id="survey-race-other" />
//             { 'Other Race (Fill in)' }
//           </label>
//         </RadioField>

// <InputField model="survey.isEnglishPrimaryLanguage">
//           <label>{ 'Is English the primary language spoken at home?' }</label>
//           <Input type="radio" value="Yes" label="Yes" />
//           <Input type="radio" value="No" label="No" />
//         </InputField>
