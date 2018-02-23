'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mockData = require('../../mockData');

var _mockData2 = _interopRequireDefault(_mockData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  index: function index(req, res) {
    if (!req.query.postId) {
      res.json({ comments: _mockData2.default.COMMENTS });
    } else {
      var commentFilter = function commentFilter(_ref) {
        var postId = _ref.postId;
        return postId === req.query.postId;
      };
      var foundComments = _mockData2.default.COMMENTS.filter(commentFilter);
      if (foundComments) {
        res.json({ comments: foundComments });
      } else {
        res.sendStatus(404);
      }
    }
  }
};