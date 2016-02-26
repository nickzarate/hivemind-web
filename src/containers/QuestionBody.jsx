import React from 'react'
import estimatesSelector from 'selectors/estimates'
import QuestionBody from 'components/QuestionBody'
import reduxify from 'store/reduxify'

class QuestionBodyContainer extends React.Component {
  render() {
    return (
      <QuestionBody
        outcomeNames={ this.props.outcomeNames }
        estimates={ this.props.estimates }
      />
    )
  }
}

export default reduxify({
  selector: estimatesSelector,
  container: QuestionBodyContainer
})
