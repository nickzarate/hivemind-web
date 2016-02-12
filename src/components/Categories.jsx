import React from 'react'

export default class Categories extends React.Component {
  handleClick(category) {
    return () => this.props.onClick(category)
  }

  renderCategories() {
    if (this.props.categories) {
      return this.props.categories.map(
        (category) => (
          <li key={ category.id }>
            <button onClick={ this.handleClick(category) }>
              { 'New ' }{ category.get('name') }{ ' round' }
            </button>
          </li>
        )
      )
    }
  }

  render() {
    return (
      <div>
        { this.renderCategories() }
      </div>
    )
  }
}
