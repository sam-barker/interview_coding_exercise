"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Comment = function Comment(id, message, date, username, postId) {
  _classCallCheck(this, Comment);

  this.id = id;
  this.message = message;
  this.date = date;
  this.username = username;
  this.postId = postId;
};

exports.default = Comment;