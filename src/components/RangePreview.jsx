import React from 'react'
import Bins from 'containers/Bins'
import { Field } from 'react-redux-form'

export default class RangePreview extends React.Component {

  makeNumber = (val) => +val;

  renderPreview() {
    return this.props.outcomeNames.map(
      (outcomeName, index) => (
        <li key={ index }>
          { outcomeName }

          { !this.props.discrete[index] &&
            <form>
              <Field model={ `ranges.${ outcomeName }.lower` } parser={ this.makeNumber }>
                <input
                  type="number"
                  placeholder="Lower Bound"
                />
              </Field>
              <Field model={ `ranges.${ outcomeName }.upper` } parser={ this.makeNumber }>
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
