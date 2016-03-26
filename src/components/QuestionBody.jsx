import React from 'react'
import Bins from 'containers/Bins'
import EstimateForm from './Forms/EstimateForm'
import Tooltip from 'components/Lib/Tooltip'
import { Input } from 'react-bootstrap'
import { createFieldClass, controls, Form } from 'react-redux-form'

const RadioField = createFieldClass({
  'Input': controls.radio
})

export default class QuestionBody extends React.Component {
  renderContinuous(outcomeName) {
    return (
      <EstimateForm
        outcomeName={ outcomeName }
        estimates={ this.props.estimates }
        ref={ (ref) => this[outcomeName] = ref }
      />
    )
  }

  renderOther(outcomeName, index, labels, values) {
    return (
      <Form model="forms.estimates">
        <RadioField
          key={ index }
          model={ `forms.estimates.${ outcomeName }` }
          ref={ (ref) => this[outcomeName] = ref }
        >
          <label>{ outcomeName }</label>
          { labels.map(
            (label, i) => (
              <Input
                key={ i }
                type="radio"
                label={ label }
                value={ values[i] }
                active
              />
            )
          ) }
        </RadioField>
      </Form>
    )
  }

  renderEstimate(outcomeName, index) {
    const { outcomeDataTypes, outcomeRanges } = this.props
    switch(outcomeDataTypes[index].type) {
    case 'continuous':
      return this.renderContinuous(outcomeName)
    case 'discrete':
      var values = []
      for (let i = outcomeRanges[index][0]; i <= outcomeRanges[index][1]; i++) {
        values.push(`${ i }`)
      }
      if (outcomeDataTypes[index].valueLabels) {
        return this.renderOther(outcomeName, index, outcomeDataTypes[index].valueLabels, values)
      } else {
        return this.renderOther(outcomeName, index, values, values)
      }
    case 'boolean':
      var vals = ['1','0']
      if (outcomeDataTypes[index].valueLabels) {
        return this.renderOther(outcomeName, index, outcomeDataTypes[index].valueLabels, vals)
      } else {
        return this.renderOther(outcomeName, index, vals, vals)
      }
    }
  }

  renderBody() {
    return this.props.outcomeNames.map(
      (outcomeName, index) => (
        <li key={ index }>
          <p>{ this.props.questionInstructions[index] }</p>
          { this.renderEstimate(outcomeName, index) }
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
        <button onClick={ this.props.onClick }>{ 'Change Ranges' }</button>
      </div>
    )
  }
}
