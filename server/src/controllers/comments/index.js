import MockData from '../../mockData'

export default {
  index: (req, res) => {
    if (!req.query.postId) {
      res.json({comments: MockData.COMMENTS})
    } else {
      const commentFilter = ({postId}) => { return postId === req.query.postId }
      const foundComments = MockData.COMMENTS.filter(commentFilter)
      if (foundComments) {
        res.json({comments: foundComments})
      } else {
        res.sendStatus(404)
      }
    }
  }
}
