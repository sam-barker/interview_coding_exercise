'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controllers = require('../controllers');

var routes = [{
  url: '/users',
  action: _controllers.UsersController.index
}, {
  url: '/users/:id',
  action: _controllers.UsersController.show
}, {
  url: '/posts',
  action: _controllers.PostsController.index
}, {
  url: '/comments',
  action: _controllers.CommentsController.index
}];

exports.default = routes;