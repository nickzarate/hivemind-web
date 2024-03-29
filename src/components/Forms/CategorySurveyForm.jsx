import React from 'react'
import { Form } from 'react-redux-form'
import Tooltip from 'components/Lib/Tooltip'
import RadioField from 'components/RadioField'
import NumberField from 'components/NumberField'

export default class CategorySurveyForm extends React.Component {
  renderFields() {
    const { allCovariateNames, allCovariateDataTypes } = this.props
    return allCovariateNames.map(
      (covariateName, index) => {
        switch(allCovariateDataTypes[index].type) {
        case 'continuous':
          return (
            <NumberField
              key={ index }
              variableName={ covariateName }
              model={ `forms.covariates.${ covariateName }` }
            />
          )
        default:
          return (
            <RadioField
              key={ index }
              labels={ allCovariateDataTypes[index].labels }
              values={ allCovariateDataTypes[index].values }
              variableName={ covariateName }
              model={ `forms.covariates.${ covariateName }` }
            />
          )
        }
      }
    )
  }

  render() {
    const { tooltip } = this.props
    return (
      <div>
        { this.props.categorySurveyInstructions }
        <Tooltip target={ this[tooltip.target] } message={ tooltip.message } />
        <Form ref={ (ref) => this.form = ref } model="forms.covariates">
          { this.renderFields() }
        </Form>
      </div>
    )
  }
}
