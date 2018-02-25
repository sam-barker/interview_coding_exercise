import MockData from '../../mockData'

/**
 * Obtains the post from a filter in the request
 * @param {object} req - The request object containing the filter
 */
const getPosts = (req) => {
  // If there's no post id then we don't need to filter
  return !req.query.userId ? MockData.POSTS : MockData.POSTS.filter(({userId}) => {
    return userId === req.query.userId
  })
}

export default {
  /**
   * Controller action for all posts
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  index: (req, res) => {
    const posts = getPosts(req)
    if (posts && posts.length > 0) {
      res.json({posts: posts})
    } else {
      res.sendStatus(404)
    }
  }
}
