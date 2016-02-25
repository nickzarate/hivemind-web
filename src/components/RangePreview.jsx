import React from 'react'
import Bins from 'containers/Bins'
import { Field } from 'react-redux-form'

export default class RangePreview extends React.Component {
  renderPreview() {
    return this.props.outcomeNames.map(
      (outcomeName, index) => (
        <li key={ index }>
          { outcomeName }

          { !this.props.discrete[index] &&
            <form>
              <Field model={ `ranges.${ outcomeName }.lower` }>
                <input
                  type="number"
                  placeholder="Lower Bound"
                />
              </Field>
              <Field model={ `ranges.${ outcomeName }.upper` }>
                <input
                  type="number"
                  placeholder="Upper Bound"
                />
              </Field>
            </form>
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
