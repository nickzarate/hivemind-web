import React from 'react'
import { Button } from 'components/Lib/Buttons'

export default class Round extends React.Component {
  render() {
    return (
      <div>
        { this.props.children }
        <Button onClick={ this.props.onSubmit }>{ 'Submit Question' }</Button>
      </div>
    )
  }
}
