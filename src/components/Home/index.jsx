import React from 'react'

export default class HomeComp extends React.Component {
  pushPath(path) {
    return () => this.props.pushPath(path)
  }

  render() {
    console.log(this)
    const { actions, round } = this.props
    return (
      <div>
        <h1>{ 'Home' }</h1>
        <button onClick={ actions.incrementNumQuestions }>{ 'increase number of questions in the round!' }</button>
        <button onClick={ actions.decrementNumQuestions }>{ 'decrease number of questions in the round!' }</button>
        <h1>{ round.numQuestions }</h1>
        <button onClick={ this.pushPath('/round') }>{ 'start education round' }</button>
      </div>
    )
  }
}
