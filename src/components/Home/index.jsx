import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import Categories from './Categories'
import Modal from './CategoryModal'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
    this.handleCategoryChoice = this.handleCategoryChoice.bind(this)
    this.handleProceed = this.handleProceed.bind(this)
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
      this.props.actions.handleCategoryChoice(category)
    }
  }

  handleProceed(data) {
    this.props.actions.handleRange(data, this.props.push)
  }

  render() {
    const { home, actions } = this.props
    return (
      <div>
        <h1>{ 'Choose a Topic' }</h1>
        <Categories
          categories={ home.categories }
          onChoose={ this.handleCategoryChoice }
        />
        <button onClick={ this.handleLogout }>{ 'Log Out' }</button>
        <Modal
          onProceed={ this.handleProceed }
          handleHide={ () => actions.showModal(false) }
          home={ home }
        />
      </div>
    )
  }
}
