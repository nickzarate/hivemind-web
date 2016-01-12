import React from 'react'
import { userActions } from 'actions'
import { reduxify } from 'toolbox'
import SurveyComp from 'components/Survey'

class Survey extends React.Component {
  render() {
    return (
      <SurveyComp
        actions={ this.props.actions }
        pushPath={ this.props.pushPath }
        user={ this.props.user }
      />
    )
  }
}

export default reduxify({
  component: Survey,
  reducer: 'user',
  actions: userActions
})
