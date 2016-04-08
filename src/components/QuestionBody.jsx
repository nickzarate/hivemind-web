import React from 'react'
import { Form } from 'react-redux-form'
import EstimateField from './EstimateField'
import RadioField from './RadioField'
import Tooltip from './Lib/Tooltip'

export default class QuestionBody extends React.Component {
  renderOutcome(outcome) {
    switch(outcome.valueType) {
    case 'continuous':
      return (
        <EstimateField
          variableName={ outcome.variableName }
          displayName={ outcome.displayName }
          estimates={ this.props.estimates }
          ref={ (ref) => this[outcome.variableName] = ref }
        />
      )
    default:
      return (
        <RadioField
          labels={ outcome.labels }
          values={ outcome.values }
          model={ `forms.estimates.${ outcome.variableName }` }
          displayName={ outcome.displayName }
          ref={ (ref) => this[outcome.variableName] = ref }
        />
      )
    }
  }

  render() {
    const { tooltip } = this.props
    return (
      <div>
        <Tooltip
          onHide={ this.props.onHide }
          message={ tooltip.message }
          target={ this[tooltip.target] ? this[tooltip.target].form : this[tooltip.target] }
          placement="right"
        />
        <ul>
          { this.props.outcomes.map((outcome, index) => (
            <li key={ index }>
              <p>{ outcome.instructions }</p>
              <Form model="forms.estimates">
                { this.renderOutcome(outcome) }
              </Form>
              <p>{ 'Tokens: ' }{ this.props.answers[index].tokens }</p>
              <p>{ 'Points: ' }{ this.props.answers[index].points }</p>
              { this.props.answers[index].binText.map((text, i) => (
                <button key={ i } onClick={ () => this.props.onBinClick(index, i) }>
                  { text + ': ' + this.props.answers[index].binValues[i] }
                </button>
              )) }
            </li>
          )) }
        </ul>
        <button onClick={ this.props.onShowRange }>{ 'Change Ranges' }</button>
      </div>
    )
  }
}
