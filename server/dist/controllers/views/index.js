'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  /**
   * Controller action to render the single view
   * @param {object} req - The request object from express
   * @param {object} res - The response object to send responses through
   */
  index: function index(req, res) {
    var location = '../../../../server/public/index.html';
    var htmlFile = _path2.default.join(__dirname, location);
    res.sendFile(htmlFile);
  }
};