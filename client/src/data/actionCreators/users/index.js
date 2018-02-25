import ActionTypes from '../../actionTypes'
import Reqwest from '@spbarker/re-qwest'

/**
 * Creates an success action when users have been fetched
 *
 * @param {Array} users - The users obtained from the server
 */
export function fetchUsersSuccess (users) {
  return {
    type: ActionTypes.FETCH_USERS_SUCCESS,
    users
  }
}

/**
 * Creates an failure action for fetching users
 *
 * @param {object} error - The error returned from the server
 */
export function fetchUsersFailure (error) {
  return {
    type: ActionTypes.FETCH_USERS_FAILURE,
    error
  }
}

/** 
 * Creates an action for the start of fetching users
 */
export function fetchUsersStart () {
  return {
    type: ActionTypes.FETCH_USERS_START
  }
}

/** 
 * Fetches users from the server
 */
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
