import React from 'react'
//import ReduxTest from 'components/ReduxTest'
import { Provider, connect } from 'react-redux'

class App extends React.Component {
  displayName: 'App'

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      modalData: {}
    }
  }

  closeModal() {
    this.setState({ showModal: false })
  }
  openModal(data) {
    this.setState({ modalData: data, showModal: true })
  }

  render() {
    let routeHandler = React.cloneElement(this.props.children, { myProp: 'my prop!' })
    return (
      <div>
        <div>
          { routeHandler }
        </div>
        <Provider store={ store }>
          <App2 />
        </Provider>
      </div>
    )
  }
}

// Map Redux state to component props
function mapStateToProps (state) {
  return {
    value: state.count
  }
}

// Map Redux actions to component props
function mapDispatchToProps (dispatch) {
  return {
    onIncreaseClick: () => dispatch(increase)
  }
}

// Connected Component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
