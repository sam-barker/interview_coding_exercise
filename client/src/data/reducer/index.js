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
    case ActionTypes.FETCH_POSTS_SUCCESS:
      return Assign({}, state, {
        isFetching: false,
        users: state.users.map((user) => {
          if (user.id !== action.userId) return user
          return Assign({}, user, {posts: action.posts})
        }),
        error: false
      })
    case ActionTypes.FETCH_POSTS_FAILURE:
      return Assign({}, state, {
        error: action.error
      })
    case ActionTypes.FETCH_POSTS_START:
      return Assign({}, state, {
        isFetching: true,
        error: false
      })
    case ActionTypes.FETCH_COMMENTS_SUCCESS:
      return Assign({}, state, {
        isFetching: false,
        users: state.users.map((user) => {
          if (user.id !== action.userId) return user
          const postsWithComments = user.posts.map((post) => {
            if (post.id !== action.postId) return post
            return Assign({}, post, {comments: action.comments})
          })
          return Assign({}, user, {posts: postsWithComments})
        }),
        error: false
      })
    case ActionTypes.FETCH_COMMENTS_FAILURE:
      return Assign({}, state, {
        error: action.error
      })
    case ActionTypes.FETCH_COMMENTS_START:
      return Assign({}, state, {
        isFetching: true,
        error: false
      })
    default:
      return state
  }
}
