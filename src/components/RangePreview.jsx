import React from 'react'
import Bins from 'containers/Bins'
import RangeForm from 'containers/Forms/RangeForm'
import Tooltip from 'components/Lib/Tooltip'

export default class RangePreview extends React.Component {
  renderPreview() {
    return this.props.outcomeNames.map(
      (outcomeName, index) => (
        <li key={ index }>
          { outcomeName }
          { this.props.outcomeDataTypes[index].type === 'continuous' &&
            <RangeForm
              outcomeName={ outcomeName }
              ref={ (ref) => this[outcomeName] = ref }
            />
          }

          <Bins
            binsIndex={ index }
            presentational
          />
        </li>
      )
    )
  }

  render() {
    return (
      <div>
        <Tooltip target={ this[this.props.tooltipTarget] } message={ this.props.tooltipMessage } />
        <ul>
          { this.renderPreview() }
        </ul>
      </div>
    )
  }
}
