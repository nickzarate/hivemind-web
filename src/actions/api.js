import { API_ECHO } from 'constants'

export function echo(response) {
  return {
    type: API_ECHO,
    payload: {
      data: response
    }
  }
}

export function handleEchoRequest() {
  return (dispatch) => {
    $.get(env.SOURCE + '/api/v1/echo', function(response) {
      console.log(response)
      dispatch(echo(response))
    })
  }
}
