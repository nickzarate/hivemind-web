import { POST } from 'actions/constants'

/*
 *  Thunk that sends a generic POST request to the Flask Server.
 *
 *  @param url        - The name of the url (corresponds to specific function trying to be accessed)
 *  @param JSONparams - Any data to be sent as parameters to the function.
 *  @param callback   - The function to be dispatched when the request finishes (passes JSON result as a param).
 */
export function post(url, JSONparams, callback) {
  return (dispatch) => {
    dispatch({
      type: POST,
      payload: {
        promise: fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(JSONparams)
        }).then(function(response) {
          return response.json()
        }).then(function(res) {
          dispatch(callback(res))
        })
      }
    })
  }
}
