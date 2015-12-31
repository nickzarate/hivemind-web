import React, { PropTypes } from 'react'

import Counter from 'components/Counter'
import { counterActions } from 'actions'

import { reduxify } from 'toolbox'

class Index extends React.Component {

  pushPath(path) {
    return () => this.props.pushPath(path)
  }


  render() {
    const { actions, counter } = this.props
    return (
      <div>
        <h1>{ 'Home' }</h1>
        <Counter
          decrement={ actions.decrement }
          increment={ actions.increment }
          value={ counter.value }
        />
        <button onClick={ this.pushPath('/login') }>{ 'Login Page' }</button>
      </div>
    )
  }

}

// Index.propTypes = {
//   actions: PropTypes.object.isRequired,
//   counter: PropTypes.number.isRequired
// }

export default reduxify({
  component: Index,
  reducer: 'counter',
  actions: counterActions
})

