import React from 'react'
import InputForm from 'containers/InputForm'

export default class LoginForm extends React.Component {
  render() {
    return (
      <InputForm
        placeholders={ ['Email','Password'] }
        types={ ['email','password'] }
      />
    )
  }
}
