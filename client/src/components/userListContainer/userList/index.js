import React from 'react'
import PropTypes from 'prop-types'
import User from './user'
import Assign from 'object-assign'

const headerStyle = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
}

const renderUsers = ({users, getPostsForUser, getCommentsForPost}) => {
  return users.map((user) => {
    const userProps = Assign({}, user, {
      getPostsForUser: getPostsForUser,
      getCommentsForPost: getCommentsForPost
    })
    return (
      <User key={user.id} {...userProps} />
    )
  })
}

const UserList = (props) => {
  return (
    <div>
      <h1 style={headerStyle}>Users</h1>
      {renderUsers(props)}
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  getPostsForUser: PropTypes.func.isRequired,
  getCommentsForPost: PropTypes.func.isRequired
}

export default UserList