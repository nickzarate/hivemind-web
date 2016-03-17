import { createAction } from 'redux-actions'

/* Action Types */
const LOGIN = 'user/LOGIN'
const LOGOUT = 'user/LOGOUT'

/* Actions */
// Saga-only actions
export const login = createAction(LOGIN, (email, password) => { email, password })
export const logout = createAction(LOGOUT)
