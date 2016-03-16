import { createAction } from 'redux-actions'

const LOGIN_ASYNC = 'user/LOGIN_ASYNC'
const LOGOUT_ASYNC = 'user/LOGOUT_ASYNC'

export const loginAsync = createAction(LOGIN_ASYNC, (email, password) => { return { email, password } })
export const logoutAsync = createAction(LOGOUT_ASYNC)
