import React from 'react'
import { chooseCategory, getCategoryNames } from 'reducers/round'
import categoriesSelector from 'selectors/categories'
import Categories from 'components/Categories'
import reduxify from 'store/reduxify'

class CategoriesContainer extends React.Component {
  componentDidMount() {
    this.props.actions.getCategoryNames()
  }

  handleClick = (categoryName) => this.props.actions.chooseCategory(categoryName);

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
  actions: { chooseCategory, getCategoryNames },
  container: CategoriesContainer
})
