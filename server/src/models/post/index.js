export default class Post {
  /**
   * Constructor for a Post
   *
   * @param {string} id - The unique ID of the post
   * @param {string} title - The title of the post
   * @param {date} date - The date of the post
   * @param {string} message - The contents of the post
   * @param {string} userId - The id of the user who created the post
   */
  constructor (id, title, date, message, userId) {
    this.id = id
    this.title = title
    this.date = date
    this.message = message
    this.userId = userId
  }
}
