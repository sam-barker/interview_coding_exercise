'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mockData = require('../../mockData');

var _mockData2 = _interopRequireDefault(_mockData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Obtains the post from a filter in the request
 * @param {object} req - The request object containing the filter
 */
var getPosts = function getPosts(req) {
  // If there's no post id then we don't need to filter
  return !req.query.userId ? _mockData2.default.POSTS : _mockData2.default.POSTS.filter(function (_ref) {
    var userId = _ref.userId;

    return userId === req.query.userId;
  });
};

exports.default = {
  /**
   * Controller action for all posts
   * @param {object} req - The request object
   * @param {object} res - The response object
   */
  index: function index(req, res) {
    var posts = getPosts(req);
    if (posts && posts.length > 0) {
      res.json({ posts: posts });
    } else {
      res.sendStatus(404);
    }
  }
};