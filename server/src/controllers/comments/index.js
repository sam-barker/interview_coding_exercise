import MockData from '../../mockData'

const getComments = (req) => {
  // If there's no post id then we don't need to filter
  return !req.query.postId ? MockData.COMMENTS : MockData.COMMENTS.filter(({postId}) => {
    return postId === req.query.postId
  })
}

export default {
  index: (req, res) => {
    const comments = getComments(req)
    if (comments && comments.length > 0) {
      res.json({comments: comments})
    } else {
      res.sendStatus(404)
    }
  }
}
