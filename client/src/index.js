import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './data'
import {fetchUsers} from './data/actionCreators/users'
import {UserList} from './components'

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

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
