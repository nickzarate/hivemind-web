import React from 'react'

export default class Categories extends React.Component {
  renderCategories() {
    if (this.props.categories) {
      return this.props.categories.map(
        (category) => (
          <li key={ category.id }>
            <button onClick={ this.props.onChoose(category) }>
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
        { this.renderCategories() }
      </div>
    )
  }
}
