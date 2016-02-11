import React from 'react'
import { handleRange, showModal } from 'actions/home'
import rangeModalSelector from 'selectors/rangeModal'
import RangeModal from 'components/RangeModal'
import reduxify from 'toolbox/reduxify'

class RangeModalContainer extends React.Component {
  
  handleSubmit = () => this.props.actions.handleRange(this.props.data, this.props.push);
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
  actions: { handleRange, showModal },
  container: RangeModalContainer
})
