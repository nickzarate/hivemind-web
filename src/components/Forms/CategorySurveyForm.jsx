import React from 'react'
import { Form, Field } from 'react-redux-form'
import { makeNumber } from 'toolbox/parsers'
import Tooltip from 'components/Lib/Tooltip'

export default class CategorySurveyForm extends React.Component {
  render() {
    return (
      <div>
        { this.props.instructions }
        <Tooltip message={ this.props.tooltipMessage } target={ this[this.props.tooltipTarget] } />
        <Form ref={ (ref) => this.form = ref }>
          { this.props.covariateNames.map(
            (covariateName, index) => (
              <Field
                key={ index }
                model={ `covariates.${ covariateName }` }
                parser={ makeNumber }
                ref={ (ref) => this[covariateName] = ref }
              >
                <input
                  type="number"
                  placeholder={ covariateName }
                />
              </Field>
            )
          ) }
        </Form>
      </div>
    )
  }
}
