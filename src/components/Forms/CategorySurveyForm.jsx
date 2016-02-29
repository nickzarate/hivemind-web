import React from 'react'
import { Field } from 'react-redux-form'
import { makeNumber } from 'toolbox/parsers'

export default class CategorySurveyForm extends React.Component {
  render() {
    return (
      <div>
        { this.props.instructions }
        <form>
          { this.props.covariateNames.map(
            (covariateName, index) => (
              <Field
                key={ index }
                model={ `covariates.${ covariateName }` }
                parser={ makeNumber }
              >
                <input
                  type="number"
                  placeholder={ covariateName }
                />
              </Field>
            )
          ) }
        </form>
      </div>
    )
  }
}
