import React from 'react'
import * as homeActions from 'actions/home'
import reduxify from 'toolbox/reduxify'
import Home from 'components/Home'

class HomeContainer extends React.Component {
  render() {
    return (
      <Home
        actions={ this.props.actions }
        push={ this.props.push }
        round={ this.props.round }
      />
    )
  }
}

export default reduxify({
  component: HomeContainer,
  reducer: 'round',
  actions: homeActions
})
