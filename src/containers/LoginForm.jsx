import React from 'react'
import { updateValue, initializeValues } from 'actions/form'
import formSelector from 'selectors/form'
import InputForm from 'components/InputForm'
import reduxify from 'toolbox/reduxify'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.props.actions.initializeValues(['',''])
  }

  handleChange () {
    return (event, index) => {
      this.props.actions.updateValue(event.target.value, index)
    }
  }

  render() {
    return (
      <InputForm
        onChange={ this.handleChange() }
        errorMessage={ this.props.errorMessage }
        placeholders={ ['Email','Password'] }
        types={ ['email','password'] }
        values={ this.props.values }
      />
    )
  }
}

export default reduxify({
  selector: formSelector,
  actions: { updateValue, initializeValues },
  container: LoginForm
})
