export default class Comment {
  /**
   * Constructor for a comment
   *
   * @param {string} id - The id of the comment
   * @param {string} message - The contents of the comment
   * @param {date} date - The date of the comment
   * @param {string} username - The username of the poster
   * @param {string} postId - The id of the post the comment is on
   */
  constructor (id, message, date, username, postId) {
    this.id = id
    this.message = message
    this.date = date
    this.username = username
    this.postId = postId
  }
}
