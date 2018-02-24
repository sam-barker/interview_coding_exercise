'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mockData = require('../../mockData');

var _mockData2 = _interopRequireDefault(_mockData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getComments = function getComments(req) {
  // If there's no post id then we don't need to filter
  return !req.query.postId ? _mockData2.default.COMMENTS : _mockData2.default.COMMENTS.filter(function (_ref) {
    var postId = _ref.postId;

    return postId === req.query.postId;
  });
};

exports.default = {
  index: function index(req, res) {
    var comments = getComments(req);
    if (comments && comments.length > 0) {
      res.json({ comments: comments });
    } else {
      res.sendStatus(404);
    }
  }
};