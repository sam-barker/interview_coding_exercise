'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('./user');

Object.defineProperty(exports, 'User', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_user).default;
  }
});

var _comment = require('./comment');

Object.defineProperty(exports, 'Comment', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_comment).default;
  }
});

var _post = require('./post');

Object.defineProperty(exports, 'Post', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_post).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }