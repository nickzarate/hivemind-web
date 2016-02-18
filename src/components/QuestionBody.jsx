import React from 'react'
import Bins from 'containers/Bins'
import InputForm from 'containers/InputForm'

export default class QuestionBody extends React.Component {
  renderBody() {
    return this.props.types.map(
      (type, index) => (
        <li key={ index }>
          <InputForm
            placeholders={ [this.props.placeholders[index]] }
            types={ [type] }
            formIndex={ index }
          />
          <Bins
            binsIndex={ index }
          />
        </li>
      )
    )
  }

  render() {
    return (
      <ul>
        { this.renderBody() }
      </ul>
    )
  }
}
