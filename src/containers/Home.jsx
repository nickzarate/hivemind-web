import React from 'react'
import * as homeActions from 'actions/home'
import { reduxify } from 'toolbox'
import Home from 'components/Home'

class HomeContainer extends React.Component {
  render() {
    return (
      <Home
        actions={ this.props.homeActions }
        pushPath={ this.props.pushPath }
        round={ this.props.round }
      />
    )
  }
}

export default reduxify({
  component: HomeContainer,
  state: 'round',
  actions: { homeActions }
})
