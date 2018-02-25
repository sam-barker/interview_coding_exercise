import React from 'react'
import PropTypes from 'prop-types'
import Style from './style'

class Hoverable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hovered: false
    }
  }

  onEnter () {
    this.setState({hovered: true})
  }

  onLeave () {
    this.setState({hovered: false})
  }

  render () {
    return (
      <div
        style={Style.clickable(this.props.colour, this.state.hovered)}
        onMouseEnter={this.onEnter.bind(this)}
        onMouseLeave={this.onLeave.bind(this)}>
        {this.props.children}
      </div>
    )
  }
}

Hoverable.defaultProps = {
  hovered: false
}

Hoverable.propTypes = {
  children: PropTypes.node.isRequired,
  colour: PropTypes.string.isRequired,
}

export default Hoverable