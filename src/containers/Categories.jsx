import React from 'react'
import { fetchCategories, fetchCategory } from 'actions/home'
import categoriesSelector from 'selectors/categories'
import Categories from 'components/Categories'
import connect from 'store/connect'

class CategoriesContainer extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.actions.fetchCategories()
  }

  handleClick(categoryName) { this.props.actions.fetchCategory(categoryName) }

  render() {
    return (
      <Categories
        onClick={ this.handleClick }
        categories={ this.props.categories }
      />
    )
  }
}

export default connect({
  selector: categoriesSelector,
  actions: { fetchCategories, fetchCategory }
})(CategoriesContainer)
