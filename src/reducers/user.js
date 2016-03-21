import { createAction } from 'redux-actions'

/* Action Types */
export const LOGIN = 'user/LOGIN'
export const LOGOUT = 'user/LOGOUT'

/* Actions */
// Saga-only actions
export const login = createAction(LOGIN, (email, password) => ({ email, password }))
export const logout = createAction(LOGOUT)
