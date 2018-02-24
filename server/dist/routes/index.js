'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = setup;

var _controllers = require('../controllers');

function setup(app) {
  app.get('/users', _controllers.UsersController.index);
  app.get('/users/:id', _controllers.UsersController.show);
  app.get('/posts', _controllers.PostsController.index);
  app.get('/comments', _controllers.CommentsController.index);
}