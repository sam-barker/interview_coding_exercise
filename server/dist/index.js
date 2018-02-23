'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _controllers = require('./controllers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 8081;

app.get('/users', _controllers.UsersController.index);
app.get('/users/:id', _controllers.UsersController.show);
app.get('/posts', _controllers.PostsController.index);
app.get('/comments', _controllers.CommentsController.index);

app.listen(PORT);

console.log('Server started successfully');