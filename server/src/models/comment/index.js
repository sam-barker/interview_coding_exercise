export default class Comment {
  constructor (id, message, date, authorId, postId) {
    this.id = id
    this.message = message
    this.date = date
    this.authorId = authorId
    this.postId = postId
  }
}
