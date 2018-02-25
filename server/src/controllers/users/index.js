import MockData from '../../mockData'

export default {
  /**
   * Controller action to obtain all users
   * @param {object} req - The request object from express
   * @param {object} res - The response object to send responses through
   */
  index: (req, res) => {
    res.json({users: MockData.USERS})
  },

  /**
   * Controller action to fetch a single user
   * @param {object} req - The request object from express
   * @param {object} res - The response object to send responses through
   */
  show: (req, res) => {
    if (!req.params.id) {
      res.sendStatus(400)
    } else {
      const foundUser = MockData.USERS.find((user) => {
        return user.id === req.params.id
      })

      if (foundUser) {
        res.json({user: foundUser})
      } else {
        res.sendStatus(404)
      }
    }
  }
}
