import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from '../../data'
import {fetchUsers} from '../../data/actionCreators/users'
import UserList from '../userListContainer'

/** 
 * Application class
 */
class App extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.unsubscribe = Store.subscribe(() => { })
    Store.dispatch(fetchUsers())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <UserList />
    )
  }
}

export default App
