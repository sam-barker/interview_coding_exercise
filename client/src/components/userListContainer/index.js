import {connect} from 'react-redux'
import UserList from './userList'
import {fetchPosts} from '../../data/actionCreators/posts'
import {fetchComments} from '../../data/actionCreators/comments'


const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToprops = (dispatch) => {
  return {
    getPostsForUser: (id) => { dispatch(fetchPosts(id)) },
    getCommentsForPost: (userId, postId) => { dispatch(fetchComments(userId, postId)) }
  }
}

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToprops
)(UserList)

export default UserContainer
