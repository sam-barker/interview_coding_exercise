'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 8081;

// Add logging
app.use((0, _morgan2.default)('combined'));

// Add routes
(0, _routes.setup)(app);

app.listen(PORT);

console.log('Server started successfully!');