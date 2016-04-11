import { createStructuredSelector } from 'reselect'

export default createStructuredSelector({
  email: (state) => state.forms.login.email,
  password: (state) => state.forms.login.password
})
