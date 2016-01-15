import React from 'react'
import * as apiActions from 'actions/api'
import { reduxify } from 'toolbox'
import TestApi from 'components/TestApi'

class TestApiContainer extends React.Component {
  render() {
    return (
      <TestApi
        actions={ this.props.actions }
        pushPath={ this.props.pushPath }
        api={ this.props.api }
      />
    )
  }
}

export default reduxify({
  component: TestApiContainer,
  reducer: 'api',
  actions: apiActions
})
