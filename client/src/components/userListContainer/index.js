import {connect} from 'react-redux'
import UserList from './userList'

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const UserContainer = connect(
  mapStateToProps
)(UserList)

export default UserContainer
