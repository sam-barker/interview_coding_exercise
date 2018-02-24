export default class Comment {
  constructor (id, message, date, userId, postId) {
    this.id = id
    this.message = message
    this.date = date
    this.userId = userId
    this.postId = postId
  }
}
