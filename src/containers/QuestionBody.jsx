import React from 'react'
import estimatesSelector from 'selectors/estimates'
import QuestionBody from 'components/QuestionBody'
import reduxify from 'store/reduxify'

class QuestionBodyContainer extends React.Component {
  render() {
    return (
      <QuestionBody
        types={ this.props.types }
        placeholders={ this.props.placeholders }
      />
    )
  }
}

export default reduxify({
  selector: estimatesSelector,
  container: QuestionBodyContainer
})
