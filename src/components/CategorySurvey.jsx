import React from 'react'
import InputForm from 'containers/InputForm'

export default class CategorySurvey extends React.Component {
  render() {
    return (
      <div>
        { this.props.instructions }
        <InputForm
          placeholders={ this.props.covariateNames }
          types={ Array(this.props.covariateNames.length).fill('number') }
        />
      </div>
    )
  }
}
