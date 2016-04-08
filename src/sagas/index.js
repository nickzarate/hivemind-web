import { fork } from 'redux-saga/effects'

import fireUserSagas from 'sagas/user'
// import fireHomeSagas from 'sagas/home'
// import fireRoundSagas from 'sagas/round'

export default function* fireSagas() {
  yield fork(fireUserSagas)
  // yield fork(fireHomeSagas)
  // yield fork(fireRoundSagas)
}


// Experimental Rules
/*
 *  select
 *  - use if component does not need selected state to begin with
 *  action
 *  - use if the component already needs the selected state for some reason
 */

/*  TYPES
 *
 *  Trigger Sagas:
 *  - Listen for an action, perform other actions based on state (through selectors)
 *  Flow Sagas:
 *  - Lay out the chronological order of actions in a while(true) loop
 *
 */
