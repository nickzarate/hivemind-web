import React from 'react'
import InputForm from 'containers/InputForm'

export default class SignupForm extends React.Component {
  render() {
    return (
      <InputForm
        placeholders={ ['Email','Password','Confirm Password'] }
        types={ ['email','password','password'] }
      />
    )
  }
}
