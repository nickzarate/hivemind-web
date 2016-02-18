import React from 'react'
import Parse from 'parse'
import { APP_ID, JAVASCRIPT_KEY } from 'KEYCHAIN'
import { handleCategoryChoice, asyncGetCategories, setUnlocked } from 'actions/home'
import categoriesSelector from 'selectors/categories'
import Categories from 'components/Categories'
import reduxify from 'toolbox/reduxify'

class CategoriesContainer extends React.Component {
  componentDidMount() {
    Parse.initialize(APP_ID, JAVASCRIPT_KEY)
    if (!Parse.User.current()) {
      this.props.push('/')
    }
    this.props.actions.asyncGetCategories(Parse)
  }

  handleClick = (choice) => this.props.actions.handleCategoryChoice(choice);

  render() {
    return (
      <Categories
        onClick={ this.handleClick }
        categories={ this.props.categories }
      />
    )
  }
}

export default reduxify({
  selector: categoriesSelector,
  actions: { handleCategoryChoice, asyncGetCategories, setUnlocked },
  container: CategoriesContainer
})
