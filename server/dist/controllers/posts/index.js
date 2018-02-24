'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mockData = require('../../mockData');

var _mockData2 = _interopRequireDefault(_mockData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  index: function index(req, res) {
    if (!req.query.userId) {
      res.json({ posts: _mockData2.default.POSTS });
    } else {
      var foundPosts = _mockData2.default.POSTS.filter(function (post) {
        return post.userId === req.query.userId;
      });

      if (foundPosts) {
        res.json({ posts: foundPosts });
      } else {
        res.sendStatus(404);
      }
    }
  }
};