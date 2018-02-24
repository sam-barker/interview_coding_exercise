import MockData from '../../mockData'

const getPosts = (req) => {
  // If there's no post id then we don't need to filter
  return !req.query.userId ? MockData.POSTS : MockData.POSTS.filter(({userId}) => {
    return userId === req.query.userId
  })
}

export default {
  index: (req, res) => {
    const posts = getPosts(req)
    if (posts && posts.length > 0) {
      res.json({posts: posts})
    } else {
      res.sendStatus(404)
    }
  }
}
