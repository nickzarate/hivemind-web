import { createSelector } from 'reselect'

const tooltipSelector = (state) => state.tooltip
const loginSelector = (state) => state.forms.login

export default createSelector(
  tooltipSelector,
  loginSelector,
  (tooltip, login) => {
    return {
      email: login.email,
      password: login.password,
      tooltipMessage: tooltip.message,
      tooltipTarget: tooltip.target === '' ? 'form' : target
    }
  }
)
