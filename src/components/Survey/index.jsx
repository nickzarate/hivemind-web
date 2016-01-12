import Parse from 'parse'
import React from 'react'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { survey } from 'assets'

export default class SurveyComp extends React.Component {
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  handleEmail = (event) => this.props.actions.setUserEmail(event.target.value);
  handlePassword = (event) => this.props.actions.setUserPassword(event.target.value);
  handleLogin = () => this.props.actions.asyncLogin(Parse, this.pushPath('/home'));

  render() {
    console.log(this)
    return (
      <div>
        <h1>{ 'Survey' }</h1>
        <select name="Age">
          <option>{ 'Age' }</option>
          <option>{ '1' }</option>
          <option>{ '2' }</option>
          <option>{ '3' }</option>
          <option>{ '4' }</option>
          <option>{ '5' }</option>
          <option>{ '6' }</option>
        </select>
        <select name="Sex">
          <option>{ 'Sex' }</option>
          <option>{ 'M' }</option>
          <option>{ 'F' }</option>
        </select>
        <select name="Race">
          <option>{ 'Race' }</option>
          <option>{ 'White' }</option>
          <option>{ 'Hispanic/Latino' }</option>
          <option>{ 'Asian' }</option>
          <option>{ 'Mixed' }</option>
          <option>{ 'Other' }</option>
        </select>
        <input
          onChange={ this.handleEmail }
          placeholder="EMAIL"
          type="email"
        />
        <input
          onChange={ this.handlePassword }
          placeholder="PASSWORD"
          type="password"
        />
        <button onClick={ this.handleLogin }>{ 'Log In' }</button>
        <button onClick={ this.pushPath('/home') }>{ 'home' }</button>
        <button onClick={ this.pushPath('/signup') }>{ 'Dont have an account?' }</button>
      </div>
    )
  }
}
