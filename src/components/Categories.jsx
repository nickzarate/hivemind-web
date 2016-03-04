import React from 'react'

export default class Categories extends React.Component {
  handleClick(categoryName) {
    return () => this.props.onClick(categoryName)
  }

  renderCategories() {
    return this.props.categoryNames.map(
      (categoryName) => (
        <li key={ categoryName }>
          <button onClick={ this.handleClick(categoryName) }>
            { 'New ' }{ categoryName }{ ' round' }
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
