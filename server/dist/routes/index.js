'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setup = setup;

var _controllers = require('../controllers');

function setup(app) {
  app.get('/', _controllers.ViewsController.index);
  app.get('/api/users', _controllers.UsersController.index);
  app.get('/api/users/:id', _controllers.UsersController.show);
  app.get('/api/posts', _controllers.PostsController.index);
  app.get('/api/comments', _controllers.CommentsController.index);
}