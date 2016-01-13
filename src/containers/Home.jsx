import React from 'react'
import * as homeActions from 'actions/home'
import { reduxify } from 'toolbox'
import HomeComp from 'components/Home'

class Home extends React.Component {
  render() {
    return (
      <HomeComp
        actions={ this.props.actions }
        pushPath={ this.props.pushPath }
        round={ this.props.round }
      />
    )
  }
}

export default reduxify({
  component: Home,
  reducer: 'round',
  actions: homeActions
})
