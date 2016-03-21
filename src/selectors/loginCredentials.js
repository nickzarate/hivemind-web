import { createSelector } from 'reselect'

export const loginCredentials = (state) => state.forms.login

export const getLoginCredentials = createSelector(
  loginCredentials,
  (login) => {
    return {
      email: login.email,
      password: login.password
    }
  }
)
