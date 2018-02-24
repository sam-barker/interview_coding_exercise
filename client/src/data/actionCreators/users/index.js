import ActionTypes from '../../actionTypes'
import Reqwest from '@spbarker/re-qwest'

export function fetchUsersSuccess (users) {
  return {
    type: ActionTypes.FETCH_USERS_SUCCESS,
    users
  }
}

export function fetchUsersFailure (error) {
  return {
    type: ActionTypes.FETCH_USERS_FAILURE,
    error
  }
}

export function fetchUsersStart () {
  return {
    type: ActionTypes.FETCH_USERS_START
  }
}

export function fetchUsers () {
  return function (dispatch) {
    dispatch(fetchUsersStart())
      Reqwest({
        method: 'GET',
        url: 'http://localhost:8080/api/users'
      })
      .then((response) => JSON.parse(response))
      .then((json) => {
        dispatch(fetchUsersSuccess(json.users))
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error))
      })
  }
}
