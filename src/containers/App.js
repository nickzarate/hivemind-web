import React from 'react'
import { Provider, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CounterActions from 'actions'


  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     showModal: false,
  //     modalData: {}
  //   }
  // }

  // closeModal() {
  //   this.setState({ showModal: false })
  // }
  // openModal(data) {
  //   this.setState({ modalData: data, showModal: true })
  // }



class App extends React.Component {
  displayName: 'App'



  render() {
    console.log(this)
    let routeHandler = React.cloneElement(this.props.children, {
      actions: this.props.actions,
      value: this.props.value
    })
    return (
      <div>
        { routeHandler }
      </div>
    )
  }
}

// Map Redux state to component props
function mapStateToProps (state) {
  return {
    value: 3
  }
}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

// Connected Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
