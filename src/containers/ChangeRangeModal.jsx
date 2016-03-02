import React from 'react'
import reduxify from 'store/reduxify'
import ChangeRangeModal from 'components/ChangeRangeModal'
import { showModal } from 'actions/modal'
import changeRangeModalSelector from 'selectors/changeRangeModal'

class ChangeRangeModalContainer extends React.Component {
  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleHide = () => this.props.actions.showModal(false);

  render() {
    return (
      <ChangeRangeModal
        show={ this.props.showModal }
        onHide={ this.handleHide }
      />
    )
  }
}

export default reduxify({
  selector: changeRangeModalSelector,
  actions: { showModal },
  container: ChangeRangeModalContainer
})
