import MockData from '../../mockData'

export default {
  index: (req, res) => {
    if (!req.query.authorId) {
      res.json({posts: MockData.POSTS})
    } else {
      const foundPosts = MockData.POSTS.filter((post) => {
        return post.authorId === req.query.authorId
      })

      if (foundPosts) {
        res.json({posts: foundPosts})
      } else {
        res.sendStatus(404)
      }
    }
  }
}
