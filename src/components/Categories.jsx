import React from 'react'

export default class Categories extends React.Component {
  handleClick(categoryName) {
    return () => this.props.onClick(categoryName)
  }

  renderCategories() {
    return this.props.categories.map(
      (category) => (
        <li key={ category.name }>
          <button onClick={ this.handleClick(category.name) }>
            { 'New ' }{ category.name }{ ' round' }
          </button>
        </li>
      )
    )
  }

  render() {
    return (
      <div>
        { this.renderCategories() }
      </div>
    )
  }
}
