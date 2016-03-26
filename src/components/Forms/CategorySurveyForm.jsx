import React from 'react'
import { toNum } from 'toolbox/parser'
import { Form, Field, createFieldClass, controls } from 'react-redux-form'
import Tooltip from 'components/Lib/Tooltip'
import { Input } from 'react-bootstrap'

const RadioField = createFieldClass({
  'Input': controls.radio
})

export default class CategorySurveyForm extends React.Component {
  renderContinuous(covariateName, index) {
    return (
      <Field
        key={ index }
        model={ `forms.covariates.${ covariateName }` }
        parser={ toNum }
        ref={ (ref) => this[covariateName] = ref }
      >
        <input
          type="number"
          placeholder={ covariateName }
        />
      </Field>
    )
  }

  renderOther(covariateName, index, labels, values) {
    return (
      <RadioField
        key={ index }
        model={ `forms.covariates.${ covariateName }` }
        ref={ (ref) => this[covariateName] = ref }
      >
        <label>{ covariateName }</label>
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
    )
  }

  renderCovariates() {
    const { allCovariateNames, allCovariateDataTypes, allCovariateRanges } = this.props
    return allCovariateNames.map(
      (covariateName, index) => {
        switch(allCovariateDataTypes[index].type) {
        case 'continuous':
          return this.renderContinuous(covariateName, index)
        case 'discrete':
          var values = []
          for (let i = allCovariateRanges[index][0]; i <= allCovariateRanges[index][1]; i++) {
            values.push(`${ i }`)
          }
          if (allCovariateDataTypes[index].valueLabels) {
            return this.renderOther(covariateName, index, allCovariateDataTypes[index].valueLabels, values)
          } else {
            return this.renderOther(covariateName, index, values, values)
          }
        case 'boolean':
          var vals = ['1','0']
          if (allCovariateDataTypes[index].valueLabels) {
            return this.renderOther(covariateName, index, allCovariateDataTypes[index].valueLabels, vals)
          } else {
            return this.renderOther(covariateName, index, vals, vals)
          }
        }
      }
    )
  }

  render() {
    return (
      <div>
        { this.props.instructions }
        <Tooltip message={ this.props.tooltipMessage } target={ this[this.props.tooltipTarget] } />
        <Form ref={ (ref) => this.form = ref } model="forms.covariates">
          { this.renderCovariates() }
        </Form>
      </div>
    )
  }
}
