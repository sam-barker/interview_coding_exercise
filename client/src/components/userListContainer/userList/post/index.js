import React from 'react'
import PropTypes from 'prop-types'
import Style from './style'
import Hoverable from '../../../hoverable'

/** 
 * Component used to represent a post
 */
class Post extends React.Component {
  constructor (props) {
    super(props)
  }

  convertDate (date) {
    return new Date(date).toDateString()
  }

  onCommentClick (e) {
    e.stopPropagation()
  }

  onPostClick (e) {
    e.stopPropagation()
    this.props.getCommentsForPost(
      this.props.userId,
      this.props.id
    )
  }

  renderComments () {
    return this.props.comments.map(({id, message, date, username}) => {
      return (
        <div
          key={`${id}_${message}`}
          style={Style.nonClickable}
          onClick={this.onCommentClick}>
          <p>{this.convertDate(date)}</p>
          <p><b>{username}: </b>{message}</p>
        </div>
      )
    })
  }

  render () {
    const {
      id,
      title,
      date,
      userId,
      message,
      comments,
      getCommentsForPost
    } = this.props
    return (
      <Hoverable key={`post_${id}`} colour={'#9af4c6'}>
        <div
          onClick={this.onPostClick.bind(this)}>
          <p>{this.convertDate(date)}</p>
          <p><b>Title: </b>{title}</p>
          <p>{message}</p>
          {this.renderComments()}
        </div>
      </Hoverable>
    )
  }
}

Post.defaultProps = {
  comments: []
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  comments: PropTypes.array,
  getCommentsForPost: PropTypes.func.isRequired
}

export default Post