import React from 'react'
import { Button } from 'components/Lib/Buttons'

export default class Categories extends React.Component {
  handleClick(categoryName) {
    return () => this.props.onClick(categoryName)
  }

  renderCategories() {
    return this.props.categoryNames.map(
      (categoryName) => (
        <li key={ categoryName }>
          <Button onClick={ this.handleClick(categoryName) }>
            { 'New ' }{ categoryName }{ ' round' }
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
