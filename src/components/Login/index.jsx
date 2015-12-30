import React from 'react'
// import Parse from 'parse'
// import ParseReact from 'parse-react'

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  updateEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>{ 'Login' }</h1>
        <input
          onChange={ this.updateEmail.bind(this) }
          placeholder="EMAIL"
          type="email"
          value={ this.state.email }
        />
        <input
          onChange={ this.updatePassword.bind(this) }
          placeholder="PASSWORD"
          type="password"
          value={ this.state.password }
        />
        <button>{ 'GO' }</button>
        <h1> { this.state.email } </h1>
        <h1> { this.state.password } </h1>
      </div>
    )
  }
}
