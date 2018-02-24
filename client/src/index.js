import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './data'
import {fetchUsers} from './data/actionCreators/users'

class App extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount () {
    this.unsubscribe = Store.subscribe(() => {
      console.log(Store.getState())
    })

    Store.dispatch(fetchUsers())
  }

  componentWillUnmount () {
    this.unsubscribe()
  }

  render () {
    return (
      <div>Hello World</div>
    )
  }
}

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
