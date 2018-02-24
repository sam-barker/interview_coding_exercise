"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Post = function Post(id, title, date, message, userId) {
  _classCallCheck(this, Post);

  this.id = id;
  this.title = title;
  this.date = date;
  this.message = message;
  this.userId = userId;
};

exports.default = Post;