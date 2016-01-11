import React, { PropTypes } from 'react'
import { homeActions } from 'actions'
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

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  round: PropTypes.object.isRequired
}

export default reduxify({
  component: Home,
  reducer: 'round',
  actions: homeActions
})
