import ActionTypes from '../../actionTypes'
import Reqwest from '@spbarker/re-qwest'

export function fetchCommentsSuccess (comments, userId, postId) {
  return {
    type: ActionTypes.FETCH_COMMENTS_SUCCESS,
    comments,
    userId,
    postId
  }
}

export function fetchCommentsFailure (error) {
  return {
    type: ActionTypes.FETCH_COMMENTS_FAILURE,
    error
  }
}

export function fetchCommentsStart () {
  return {
    type: ActionTypes.FETCH_COMMENTS_START
  }
}

export function fetchComments (userId, postId) {
  return function (dispatch) {
    dispatch(fetchCommentsStart())
      Reqwest({
        method: 'GET',
        url: `http://localhost:8080/api/comments?postId=${postId}`
      })
      .then((response) => JSON.parse(response))
      .then((json) => {
        dispatch(fetchCommentsSuccess(json.comments, userId, postId))
      })
      .catch((error) => {
        dispatch(fetchCommentsFailure(error))
      })
  }
}