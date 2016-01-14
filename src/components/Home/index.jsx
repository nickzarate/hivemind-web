import React from 'react'

export default class Home extends React.Component {
  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  render() {
    const { actions, round } = this.props
    return (
      <div>
        <h1>{ 'Home' }</h1>
        <button onClick={ actions.incrementNumQuestions }>{ 'increase number of questions in the round!' }</button>
        <button onClick={ actions.decrementNumQuestions }>{ 'decrease number of questions in the round!' }</button>
        <h1>{ round.questionInfo.numQuestions }</h1>
        <button onClick={ this.pushPath('/round') }>{ 'start education round' }</button>
        <button onClick={ this.pushPath('/stats') }>{ 'Check out latest round!' }</button>
      </div>
    )
  }
}
