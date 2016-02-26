import React from 'react'
import Bins from 'containers/Bins'
import RangeForm from './Form/RangeForm'

export default class RangePreview extends React.Component {
  renderPreview() {
    return this.props.outcomeNames.map(
      (outcomeName, index) => (
        <li key={ index }>
          { outcomeName }

          { !this.props.discrete[index] &&
            <RangeForm
              outcomeName={ outcomeName }
            />
          }

          <Bins
            binsIndex={ index }
            presentational
          />
        </li>
      )
    )
  }

  render() {
    return (
      <ul>
        { this.renderPreview() }
      </ul>
    )
  }
}
