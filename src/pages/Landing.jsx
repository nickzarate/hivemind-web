import React from 'react'
import { Logo, BrandSubtitle } from 'components/Lib/Branding.jsx'

/* Containers */
import AccessButtons from 'containers/AccessButtons'
import LoginModal from 'containers/LoginModal'

/* Components */
export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <BrandSubtitle />
        <div>&nbsp;</div>
        <AccessButtons />
        <LoginModal />
      </div>
    )
  }
}
