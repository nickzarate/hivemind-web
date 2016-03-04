import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { asyncHandleCategoryChoice, asyncGetCategoryNames } from 'actions/home'
import categoriesSelector from 'selectors/categories'
import Categories from 'components/Categories'
import reduxify from 'store/reduxify'

class CategoriesContainer extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    this.props.actions.asyncGetCategoryNames(Parse)
  }

  handleClick = (categoryName) => this.props.actions.asyncHandleCategoryChoice(Parse, categoryName);

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
