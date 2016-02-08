import React from 'react'
import Home from 'components/Home'
import homeSelector from 'selectors/home'
import * as homeActions from 'actions/home'
import reduxify from 'toolbox/reduxify'

class HomeContainer extends React.Component {
  render() {
    return (
      <Home
        actions={ this.props.actions }
        push={ this.props.push }
        categories={ this.props.categories }
        showModal={ this.props.showModal }
        currentCategory={ this.props.currentCategory }
      />
    )
  }
}

export default reduxify({
  selector: homeSelector,
  actions: homeActions,
  component: HomeContainer
})
