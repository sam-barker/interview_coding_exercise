import MockData from '../../mockData'

export default {
  index: (req, res) => {
    if (!req.query.userId) {
      res.json({posts: MockData.POSTS})
    } else {
      const foundPosts = MockData.POSTS.filter((post) => {
        return post.userId === req.query.userId
      })

      if (foundPosts) {
        res.json({posts: foundPosts})
      } else {
        res.sendStatus(404)
      }
    }
  }
}
