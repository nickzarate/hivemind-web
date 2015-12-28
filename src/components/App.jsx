import React from 'react'
import ReduxTest from 'components/ReduxTest'

export default class App extends React.Component {

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
        <ReduxTest />
      </div>
    )
  }
}
