import React from 'react'
import Bins from 'containers/Bins'
import EstimateForm from './Forms/EstimateForm'
import Tooltip from 'components/Lib/Tooltip'

export default class QuestionBody extends React.Component {
  renderBody() {
    return this.props.outcomeNames.map(
      (outcomeName, index) => (
        <li key={ index }>
          <EstimateForm
            outcomeName={ outcomeName }
            estimates={ this.props.estimates }
            ref={ (ref) => this[outcomeName] = ref }
          />
          <Bins
            binsIndex={ index }
          />
        </li>
      )
    )
  }

  render() {
    const { tooltipTarget } = this.props
    return (
      <div>
        <Tooltip
          onHide={ this.props.onHide }
          message={ this.props.tooltipMessage }
          target={ this[tooltipTarget] ? this[tooltipTarget].form : this[tooltipTarget] }
          placement="right"
        />
        <ul>
          { this.renderBody() }
        </ul>
      </div>
    )
  }
}
