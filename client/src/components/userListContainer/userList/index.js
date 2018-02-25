import React from 'react'
import PropTypes from 'prop-types'
import User from './user'
import Assign from 'object-assign'

const headerStyle = {
  fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif'
}

const renderError = (error) => {
  return !error ? null : (
    <p>An error has occured: {error}</p>
  )
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

/**
 * Creates a UserList component
 *
 * @param {object} props - The properties of the UserList
 */
const UserList = (props) => {
  return (
    <div>
      {renderError(props.error)}
      <h1 style={headerStyle}>Users</h1>
      {renderUsers(props)}
    </div>
  )
}

UserList.defaultProps = {
  error: false
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  getPostsForUser: PropTypes.func.isRequired,
  getCommentsForPost: PropTypes.func.isRequired
}

export default UserList