import React from 'react'
import QuestionContainer from 'containers/Question'
import Instructions from 'containers/Instructions'

export default class Question extends React.Component {
  render() {
    return (
      <div>
        <Instructions />
      </div>
    )
  }
}
