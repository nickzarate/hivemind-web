import React from 'react'
import { chooseCategory } from 'reducers/round'
import { asyncGetCategoryNames } from 'actions/home'
import categoriesSelector from 'selectors/categories'
import Categories from 'components/Categories'
import connect from 'store/connect'

class CategoriesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.actions.asyncGetCategoryNames()
  }

  handleClick(categoryName) {
    this.props.actions.chooseCategory(categoryName)
  }

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
  actions: { chooseCategory, asyncGetCategoryNames }
})(CategoriesContainer)
