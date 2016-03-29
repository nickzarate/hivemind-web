import React from 'react'
import { asyncHandleCategoryChoice, asyncGetCategoryNames } from 'actions/home'
import categoriesSelector from 'selectors/categories'
import Categories from 'components/Categories'
import connect from 'store/connect'

class CategoriesContainer extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.actions.asyncGetCategoryNames()
  }

  handleClick(categoryName) { this.props.actions.asyncHandleCategoryChoice(categoryName) }

  render() {
    return (
      <Categories
        onClick={ this.handleClick }
        categoryNames={ this.props.categoryNames }
      />
    )
  }
}

export default connect({
  selector: categoriesSelector,
  actions: { asyncHandleCategoryChoice, asyncGetCategoryNames }
})(CategoriesContainer)
