'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _comments = require('./comments');

Object.defineProperty(exports, 'CommentsController', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_comments).default;
  }
});

var _users = require('./users');

Object.defineProperty(exports, 'UsersController', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_users).default;
  }
});

var _posts = require('./posts');

Object.defineProperty(exports, 'PostsController', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_posts).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }