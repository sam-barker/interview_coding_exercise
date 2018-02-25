import ActionTypes from '../../actionTypes'
import Reqwest from '@spbarker/re-qwest'

/**
 * Creates an action for successful fetching of comments
 *
 * @param {Array} comments - The comments obtained from the server
 * @param {string} userId - The id of the user who's post the comments belong to
 * @param {string} postId - The id of the post these comments belong to
 */
export function fetchCommentsSuccess (comments, userId, postId) {
  return {
    type: ActionTypes.FETCH_COMMENTS_SUCCESS,
    comments,
    userId,
    postId
  }
}

/**
 * Creates an action for an unsuccessful fetching of comments
 *
 * @param {object} error - The error received from the server
 */
export function fetchCommentsFailure (error) {
  return {
    type: ActionTypes.FETCH_COMMENTS_FAILURE,
    error
  }
}

/**
 * Creates an action for starting the fetch of comments
 */
export function fetchCommentsStart () {
  return {
    type: ActionTypes.FETCH_COMMENTS_START
  }
}

/**
 * Fetches comments from the server
 *
 * @param {string} userId - The id of the user who's posts have the comments
 * @param {string} postId - the id of the post that the comments belong to
 */
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