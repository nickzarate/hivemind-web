import React from 'react'

/* Containers */
import Instructions from 'containers/Instructions'
import QuestionBody from 'containers/QuestionBody'
import ChangeRangeModal from 'containers/ChangeRangeModal'

export default class Question extends React.Component {
  render() {
    return (
      <div>
        <Instructions />
        <QuestionBody />
        <ChangeRangeModal />
      </div>
    )
  }
}
