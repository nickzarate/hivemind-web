import React from 'react'
import connect from 'store/connect'
import ChangeRangeModal from 'components/ChangeRangeModal'
import { showModal } from 'reducers/modal'
import changeRangeModalSelector from 'selectors/changeRangeModal'

class ChangeRangeModalContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleHide = this.handleHide.bind(this)
  }

  componentWillUnmount() {
    this.props.actions.showModal(false)
  }

  handleHide() {
    this.props.actions.showModal(false)
  }

  render() {
    return (
      <ChangeRangeModal
        show={ this.props.showModal }
        onHide={ this.handleHide }
      />
    )
  }
}

export default connect({
  selector: changeRangeModalSelector,
  actions: { showModal }
})(ChangeRangeModalContainer)
