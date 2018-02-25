"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Comment =
/**
 * Constructor for a comment
 *
 * @param {string} id - The id of the comment
 * @param {string} message - The contents of the comment
 * @param {date} date - The date of the comment
 * @param {string} username - The username of the poster
 * @param {string} postId - The id of the post the comment is on
 */
function Comment(id, message, date, username, postId) {
  _classCallCheck(this, Comment);

  this.id = id;
  this.message = message;
  this.date = date;
  this.username = username;
  this.postId = postId;
};

exports.default = Comment;