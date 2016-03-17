import { createAction } from 'redux-actions'

/* Action Types */
const LOGIN = 'user/LOGIN'
const LOGOUT = 'user/LOGOUT'

/* Actions */
export const login = createAction(LOGIN, (email, password) => { return { email, password } })
export const logout = createAction(LOGOUT)
