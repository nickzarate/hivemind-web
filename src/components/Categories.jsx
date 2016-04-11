import React from 'react'
import { Button } from 'components/Lib/Buttons'

export default class Categories extends React.Component {
  handleClick(categoryName) {
    return () => this.props.onClick(categoryName)
  }

  renderCategories() {
    return this.props.categories.map(
      (category) => (
        <li key={ category.name }>
          <Button onClick={ this.handleClick(category.name) }>
            { 'New ' }{ category.name }{ ' round' }
          </Button>
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
