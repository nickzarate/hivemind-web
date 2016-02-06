import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import Categories from './Categories'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleCategoryChoice = this.handleCategoryChoice.bind(this)
  }

  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
  }

  componentDidMount() {
    if (!Parse.User.current()) { this.props.push('/') }
    this.props.actions.getCategories(Parse)
  }

  handleLogout() {
    Parse.User.logOut()
    this.props.push('/')
  }

  push(path) {
    return () => this.props.push(path)
  }

  handleCategoryChoice(category) {
    return () => {
      this.props.actions.setCurrentCategory(category)
      this.props.push('/round')
    }
  }

  render() {
    return (
      <div>
        <h1>{ 'Home' }</h1>
        <Categories
          categories={ this.props.categories }
          onChoose={ this.handleCategoryChoice }
        />
        <button onClick={ this.handleLogout }>{ 'Log Out' }</button>
      </div>
    )
  }
}
