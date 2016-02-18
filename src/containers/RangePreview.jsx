import React from 'react'
import { initializeQuestion } from 'actions/round'
import { setRanges, validateRange, checkRange } from 'actions/home'
import { clearValues } from 'actions/form'
import rangePreviewSelector from 'selectors/rangePreview'
import RangePreview from 'components/RangePreview'
import reduxify from 'toolbox/reduxify'

class RangePreviewContainer extends React.Component {
  componentDidMount() {
    this.props.actions.initializeQuestion(this.props.numBins, this.props.bank)
    this.props.actions.setRanges(Array(this.props.outcomeNames.length).fill(['','']))
  }

  componentWillUnmount() {
    this.props.actions.clearValues()
  }

  handleBlur = (formIndex) => this.props.actions.validateRange(formIndex);
  handleFormChange = (formIndex) => this.props.actions.checkRange(formIndex)

  render() {
    return (
      <RangePreview
        outcomeNames={ this.props.outcomeNames }
        discrete={ this.props.discrete }
        onBlur={ this.handleBlur }
        onFormChange={ this.handleFormChange }
      />
    )
  }
}

export default reduxify({
  selector: rangePreviewSelector,
  actions: { initializeQuestion, setRanges, clearValues, validateRange, checkRange },
  container: RangePreviewContainer
})
