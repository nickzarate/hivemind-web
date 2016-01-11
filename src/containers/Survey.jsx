import React, { PropTypes } from 'react'
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

Survey.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
}

export default reduxify({
  component: Survey,
  reducer: 'user',
  actions: userActions
})
