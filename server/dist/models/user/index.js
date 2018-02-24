"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function User(id, username, email) {
  _classCallCheck(this, User);

  this.id = id;
  this.username = username;
  this.email = email;
};

exports.default = User;