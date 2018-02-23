'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mockData = require('../../mockData');

var _mockData2 = _interopRequireDefault(_mockData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  index: function index(req, res) {
    res.json({ users: _mockData2.default.USERS });
  },

  show: function show(req, res) {
    if (!req.params.id) {
      res.sendStatus(400);
    } else {
      var foundUser = _mockData2.default.USERS.find(function (user) {
        return user.id === req.params.id;
      });

      if (foundUser) {
        res.json({ user: foundUser });
      } else {
        res.sendStatus(404);
      }
    }
  }
};