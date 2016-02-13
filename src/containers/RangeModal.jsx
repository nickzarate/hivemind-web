import React from 'react'
import { handleRange } from 'actions/home'
import { show } from 'actions/modal'
import rangeModalSelector from 'selectors/rangeModal'
import RangeModal from 'components/RangeModal'
import reduxify from 'toolbox/reduxify'

class RangeModalContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.show(false)
  }
  
  handleSubmit = () => this.props.actions.handleRange(this.props.values, this.props.push);
  handleHide = () => this.props.actions.show(false);

  render() {
    return (
      <RangeModal
        show={ this.props.show }
        instructions={ this.props.instructions }
        onSubmit={ this.handleSubmit }
        onHide={ this.handleHide }
      />
    )
  }
}

export default reduxify({
  selector: rangeModalSelector,
  actions: { handleRange, show },
  container: RangeModalContainer
})
