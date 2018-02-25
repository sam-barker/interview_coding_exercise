export default class User {
  /**
   * Constructor for a User
   *
   * @param {string} id - The unique id for the user
   * @param {string} username - The username of the user
   * @param {string} email - The user's email
   */
  constructor (id, username, email) {
    this.id = id
    this.username = username
    this.email = email
  }
}
