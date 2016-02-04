import { Alert } from 'react-bootstrap'
import React from 'react'

export default function renderError(message) {
  if (message) {
    return (
      <Alert>
        { message }
      </Alert>
    )
  }
}
