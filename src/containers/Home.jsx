import React from 'react'
import Home from 'components/Home'
import subscribe from 'selectors/homeSelector'

class HomeContainer extends React.Component {
  render() {
    return (
      <Home
        actions={ this.props.actions }
        push={ this.props.push }
        round={ this.props.round }
      />
    )
  }
}

export default subscribe(HomeContainer)
