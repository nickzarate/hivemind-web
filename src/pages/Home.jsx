import React from 'react'

/* Containers */
import Categories from 'containers/Categories'
import RangeModal from 'containers/RangeModal'
import LogoutButton from 'containers/LogoutButton'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>{ 'Pick a Topic' }</h1>
        <Categories />
        <RangeModal />
        <LogoutButton />
      </div>
    )
  }
}
