import ActionTypes from '../../actionTypes'
import Reqwest from '@spbarker/re-qwest'

/**
 * Creates an action for the success of fetching posts
 *
 * @param {Array} posts - The posts successfully fetched from the server
 * @param {string} userId - The id of the user who the posts belong to
 */
export function fetchPostsSuccess (posts, userId) {
  return {
    type: ActionTypes.FETCH_POSTS_SUCCESS,
    posts,
    userId
  }
}

/**
 * Creates an action for the failure of fetching posts
 *
 * @param {object} error - The error from the server
 */
export function fetchPostsFailure (error) {
  return {
    type: ActionTypes.FETCH_POSTS_FAILURE,
    error
  }
}

/**
 * Creates an action for the initiation of a fetch for posts 
 */
export function fetchPostsStart () {
  return {
    type: ActionTypes.FETCH_POSTS_START
  }
}

/**
 * Fetches posts from the server
 *
 * @param {string} userId - The user to fetch posts for
 */
export function fetchPosts (userId) {
  return function (dispatch) {
    dispatch(fetchPostsStart())
      Reqwest({
        method: 'GET',
        url: `http://localhost:8080/api/posts?userId=${userId}`
      })
      .then((response) => JSON.parse(response))
      .then((json) => {
        dispatch(fetchPostsSuccess(json.posts, userId))
      })
      .catch((error) => {
        dispatch(fetchPostsFailure(error))
      })
  }
}