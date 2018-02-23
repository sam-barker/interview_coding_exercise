import MockData from '../../mockData'

export default {
  index: (req, res) => {
    res.json({users: MockData.USERS})
  },

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
