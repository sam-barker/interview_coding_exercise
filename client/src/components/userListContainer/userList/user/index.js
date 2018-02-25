import React from 'react'
import PropTypes from 'prop-types'
import Post from '../post'
import Hoverable from '../../../hoverable'
import Assign from 'object-assign'

class User extends React.Component {
  constructor (props) {
    super(props)
  }

  onUserClick (e) {
    this.props.getPostsForUser(this.props.id)
  }

  renderPosts () {
    const posts = this.props.posts.map((post) => {
      const postProps = Assign({}, post, {
        getCommentsForPost: this.props.getCommentsForPost
      })
      return (
        <Post key={`post_${post.id}`} {...postProps} />
      )
    })

    return posts.length == 0 ? null : (
      <div>
        <h2>Posts by {this.props.username}:</h2>
        {posts}
      </div>
    )
  }

  render () {
    const {id, email, username} = this.props 
    return (
      <Hoverable colour={'#8db3ef'}>
        <div
          key={`user_${id}`}
          onClick={this.onUserClick.bind(this)}>
          <p><b>User Id: </b>{id}</p>
          <p><b>Username: </b>{username}</p>
          <p><b>Email: </b>{email}</p>
          {this.renderPosts()}
        </div>
      </Hoverable>
    )
  }
}

User.defaultProps = {
  posts: []
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  posts: PropTypes.array,
  getPostsForUser: PropTypes.func.isRequired,
  getCommentsForPost: PropTypes.func.isRequired
}

export default User