import React from 'react'
import RangeForm from 'containers/Forms/RangeForm'
import Tooltip from 'components/Lib/Tooltip'

export default class RangePreview extends React.Component {
  render() {
    const { tooltip } = this.props
    return (
      <div>
        <Tooltip target={ this[tooltip.target] } message={ tooltip.message } />
        <ul>
          { this.props.outcomes.map((outcome, index) => (
            <li key={ index }>
              { outcome.displayName }
              { outcome.valueType === 'continuous' &&
                <RangeForm
                  variableName={ outcome.variableName }
                  ref={ (ref) => this[outcome.variableName] = ref }
                />
              }
              <p>{ 'Tokens: ' }{ this.props.answers[index].tokens }</p>
              <p>{ 'Points: ' }{ this.props.answers[index].points }</p>
              { this.props.answers[index].binText.map((text, index) => (
                <button key={ index }>
                  { text }
                </button>
              )) }
            </li>
          )) }
        </ul>
      </div>
    )
  }
}
