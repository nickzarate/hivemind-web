import React from 'react'
import { chooseCategory, getCategoryNames } from 'reducers/round'
import categoriesSelector from 'selectors/categories'
import Categories from 'components/Categories'
import connect from 'store/connect'

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

export default connect({
  selector: categoriesSelector,
  actions: { chooseCategory, getCategoryNames }
})(CategoriesContainer)
