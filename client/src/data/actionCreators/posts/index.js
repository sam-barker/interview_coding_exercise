import ActionTypes from '../../actionTypes'
import Reqwest from '@spbarker/re-qwest'

export function fetchPostsSuccess (posts, userId) {
  return {
    type: ActionTypes.FETCH_POSTS_SUCCESS,
    posts,
    userId
  }
}

export function fetchPostsFailure (error) {
  return {
    type: ActionTypes.FETCH_POSTS_FAILURE,
    error
  }
}

export function fetchPostsStart () {
  return {
    type: ActionTypes.FETCH_POSTS_START
  }
}

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