import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'

export default class Home extends React.Component {
  componentWillMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    this.props.actions.getCategories(Parse)
  }

  push(path) {
    return () => this.props.push(path)
  }

  chooseCategory(category) {
    return () => {
      this.props.actions.setCurrentCategory(category)
      this.props.push('/round')
    }
  }

  renderCategories() {
    if (this.props.round.categories) {
      return this.props.round.categories.map(
        (category) => (
          <li key={ category.id }>
            <button onClick={ this.chooseCategory(category) }>
              { 'Start new ' }{ category.get('name') }{ ' round' }
            </button>
          </li>
        )
      )
    }
  }

  render() {
    return (
      <div>
        <h1>{ 'Home' }</h1>
        <ul>{ this.renderCategories() }</ul>
        <button onClick={ this.push('/stats') }>{ 'Check out latest round!' }</button>
      </div>
    )
  }
}
