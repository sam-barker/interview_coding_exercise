import React from 'react'
import PropTypes from 'prop-types'

const UserList = ({users}) => {
  return users.map(({id, email, username}) => {
    return (
      <div key={`${id}_${email}_${username}`}>
        <p>ID - {id}</p>
        <p>Email - {email}</p>
        <p>Username - {username}</p>
      </div>
    )
  })
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserList