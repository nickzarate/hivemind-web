import React from 'react'
import UnwrappedForm from './UnwrappedForm'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (data) => {
    let info = []
    for (let i = 0; i < this.props.children.length - 1; i++) {
      info.push(data.target[i].value)
    }
    data.preventDefault()
    this.props.onSubmit(info)
  };

  render() {
    return (
      <UnwrappedForm onSubmit={ this.handleSubmit }>
        { this.props.children }
      </UnwrappedForm>
    )
  }
}
