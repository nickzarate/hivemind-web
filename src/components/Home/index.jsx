import React, { PropTypes } from 'react'
import { homeActions } from 'actions'
import { reduxify } from 'toolbox'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  pushPath(path) {
    return () => {
      //console.log(this.props.home.numQuestions)
      this.props.pushPath(path)//, this.props.home.numQuestions)
    }
  }

  render() {
    return (
      <div>
        <h1>{ 'home' }</h1>
        <button onClick={ this.pushPath('/Question') }>{ 'start round' }</button>
      </div>
    )
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
  pushPath: PropTypes.func.isRequired,
  home: PropTypes.object.isRequired
}

export default reduxify({
  component: Home,
  reducer: 'home',
  actions: homeActions
})
