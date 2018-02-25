import React from 'react'
import PropTypes from 'prop-types'

const style = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  border: '1px solid black',
  padding: '10px',
  margin: '10px',
  wordBreak: 'break-all'
}

const renderComments = (comments) => {
  return comments.map(({id, message, date, userId}) => {
    return (
      <div key={`${id}_${message}`} style={style}>{message} {date} {userId}</div>
    )
  })
}

const renderPosts = (posts, getCommentsForPost) => {
  return posts.map(({id, title, date, message, userId, comments = []}) => {
    return (
      <div style={style} key={`${id}_${title}_${date}`}>
        <a href={'#'} onClick={() => { getCommentsForPost(userId, id) }}>{title}</a> {date} {message}
        {renderComments(comments)}
      </div>
    )
  })
}

const UserList = ({users, getPostsForUser, getCommentsForPost}) => {
  return users.map(({id, email, username, posts = []}) => {
    return (
      <div style={style} key={`${id}_${email}_${username}`}>
        <p>{id}</p>
        <a href={'#'} onClick={() => { getPostsForUser(id) }}>{username}</a>
        <p>{email}</p>
        {renderPosts(posts, getCommentsForPost)}
      </div>
    )
  })
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  getPostsForUser: PropTypes.func.isRequired,
  getCommentsForPost: PropTypes.func.isRequired
}

export default UserList