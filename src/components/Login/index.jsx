import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
  }

  updateEmail(event) {
    console.log(event)
    this.setState({
      email: event.target.value
    });
  }

  updatePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1> Login </h1>
        <input
          value={this.state.email}
          placeholder='EMAIL'
          type='email'
          onChange={this.updateEmail.bind(this)}
        />
        <input
          value={this.state.password}
          placeholder='PASSWORD'
          type='password'
          onChange={this.updatePassword.bind(this)}
        />
        <button> GO </button>
        <h1> {this.state.email} </h1>
        <h1> {this.state.password} </h1>
      </div>
    );
  }
};
