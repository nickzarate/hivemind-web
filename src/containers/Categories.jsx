import React from 'react'
import { asyncHandleCategoryChoice, asyncGetCategoryNames } from 'actions/home'
import categoriesSelector from 'selectors/categories'
import Categories from 'components/Categories'
import reduxify from 'store/reduxify'

class CategoriesContainer extends React.Component {
  componentDidMount() {
    this.props.actions.asyncGetCategoryNames()
  }

  handleClick = (categoryName) => this.props.actions.asyncHandleCategoryChoice(categoryName);

  render() {
    return (
      <Categories
        onClick={ this.handleClick }
        categoryNames={ this.props.categoryNames }
      />
    )
  }
}

export default reduxify({
  selector: categoriesSelector,
  actions: { asyncHandleCategoryChoice, asyncGetCategoryNames },
  container: CategoriesContainer
})
