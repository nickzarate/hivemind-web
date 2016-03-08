import React from 'react'
import reduxify from 'store/reduxify'
import SurveyInstructions from 'components/SurveyInstructions'

class SurveyInstructionsContainer extends React.Component {
  handleClick = () => {
    this.props.push('/signup/1')
  };

  render() {
    return (
      <SurveyInstructions
        onClick={ this.handleClick }
      />
    )
  }
}

export default reduxify({
  actions: {},
  container: SurveyInstructionsContainer
})
