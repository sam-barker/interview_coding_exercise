"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Post =
/**
 * Constructor for a Post
 *
 * @param {string} id - The unique ID of the post
 * @param {string} title - The title of the post
 * @param {date} date - The date of the post
 * @param {string} message - The contents of the post
 * @param {string} userId - The id of the user who created the post
 */
function Post(id, title, date, message, userId) {
  _classCallCheck(this, Post);

  this.id = id;
  this.title = title;
  this.date = date;
  this.message = message;
  this.userId = userId;
};

exports.default = Post;