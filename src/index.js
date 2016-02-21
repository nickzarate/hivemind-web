/* Polyfill */
require('es6-promise').polyfill()

import { createElement } from 'react'
import { render } from 'react-dom'
import Root from 'containers/Root'

if (__DEV__) {
  try {
    render(Root, document.getElementById('root'))
  } catch (error) {
    render(
      createElement(require('redbox-react'), { error }),
      document.getElementById('root')
    )
  }
} else {
  render(Root, document.getElementById('root'))
}
