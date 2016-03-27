import React from 'react'
import Bins from 'containers/Bins'
import EstimateForm from './Forms/EstimateForm'
import Tooltip from 'components/Lib/Tooltip'
import { Form } from 'react-redux-form'
import RadioField from 'components/Forms/RadioField'

export default class QuestionBody extends React.Component {
  renderOutcome(outcomeName, index) {
    const { outcomeDataTypes } = this.props
    switch(outcomeDataTypes[index].type) {
    case 'continuous':
      return (
        <EstimateForm
          outcomeName={ outcomeName }
          estimates={ this.props.estimates }
          ref={ (ref) => this[outcomeName] = ref }
        />
      )
    default:
      return (
        <Form model="forms.estimates" ref={ (ref) => this[outcomeName] = ref }>
          <RadioField
            labels={ outcomeDataTypes[index].labels }
            values={ outcomeDataTypes[index].values }
            model={ `forms.estimates.${ outcomeName }` }
            variableName={ outcomeName }
          />
        </Form>
      )
    }
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
          { this.props.outcomeNames.map(
            (outcomeName, index) => (
              <li key={ index }>
                <p>{ this.props.questionInstructions[index] }</p>
                { this.renderOutcome(outcomeName, index) }
                <Bins
                  binsIndex={ index }
                />
              </li>
            )
          ) }
        </ul>
        <button onClick={ this.props.onClick }>{ 'Change Ranges' }</button>
      </div>
    )
  }
}
