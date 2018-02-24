import Assign from 'object-assign'
import ActionTypes from '../actionTypes'
import InitialState from '../initialState'

export default (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_USERS_SUCCESS:
      return Assign({}, state, {
        isFetching: false,
        users: action.users,
        error: false
      })
    case ActionTypes.FETCH_USERS_FAILURE:
      return Assign({}, state, {
        error: action.error
      })
    case ActionTypes.FETCH_USERS_START:
      return Assign({}, state, {
        isFetching: true,
        error: false
      })
    default:
      return state
  }
}
