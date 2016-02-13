import React from 'react'
import { handleRangeSubmission } from 'actions/home'
import { showModal } from 'actions/modal'
import rangeModalSelector from 'selectors/rangeModal'
import RangeModal from 'components/RangeModal'
import reduxify from 'toolbox/reduxify'

class RangeModalContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleSubmit = () => this.props.actions.handleRangeSubmission(this.props.push, '/round');
  handleHide = () => this.props.actions.showModal(false);

  render() {
    return (
      <RangeModal
        show={ this.props.showModal }
        instructions={ this.props.instructions }
        onSubmit={ this.handleSubmit }
        onHide={ this.handleHide }
      />
    )
  }
}

export default reduxify({
  selector: rangeModalSelector,
  actions: { handleRangeSubmission, showModal },
  container: RangeModalContainer
})
