'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('../models');

var TONY_STARK = new _models.User('1', 'i_am_iron_man', 'tony@starkindustries.com');
var STEVE_ROGERS = new _models.User('2', 'first_avenger', 'steverogers@aol.com');
var BRUCE_BANNER = new _models.User('3', 'green_and_mean', 'brucebanner@gmail.com');
var PETER_PARKER = new _models.User('4', 'web_head', 'peterparker@hotmail.com');

var TONY_STARK_POST_1 = new _models.Post('1', 'I am Iron Man!', new Date(2006, 2, 23), 'Time to admit it ... I AM IRON MAN', TONY_STARK.id);

var TONY_STARK_POST_2 = new _models.Post('2', 'I made ultron', new Date(2013, 7, 14), 'So yeah, I made Ultron. it was a mistake', TONY_STARK.id);

var STEVE_ROGERS_POST_1 = new _models.Post('3', 'How do I use this?', new Date(2012, 3, 16), 'What even is this? Where is the radio?', STEVE_ROGERS.id);

var BRUCE_BANNER_POST_1 = new _models.Post('4', 'HULK SMASH', new Date(2015, 1, 3), 'RAWWWRRRRRRRRRRRR', BRUCE_BANNER.id);

var PETER_PARKER_POST_1 = new _models.Post('5', 'Being Spidey is tiring!', new Date(2018, 2, 22), 'I got no homework done last night! I was too busy fighting the Green Goblin!', PETER_PARKER.id);

var TONY_STARK_COMMENT_1 = new _models.Comment('1', 'Just give up Cap!', new Date(2012, 3, 18), TONY_STARK.username, STEVE_ROGERS_POST_1.id);

var TONY_STARK_COMMENT_2 = new _models.Comment('2', 'You won\'t like him when he\'s angry!', new Date(2015, 1, 4), TONY_STARK.username, BRUCE_BANNER_POST_1.id);

var STEVE_ROGERS_COMMENT_1 = new _models.Comment('3', 'We all knew that!', new Date(2018, 2, 23), STEVE_ROGERS.username, TONY_STARK_POST_1.id);

var BRUCE_BANNER_COMMENT_1 = new _models.Comment('4', 'Don\'t you mean WE?', new Date(2013, 7, 15), BRUCE_BANNER.username, TONY_STARK_POST_2.id);

var TONY_STARK_COMMENT_3 = new _models.Comment('5', 'You should always do your homework kid', new Date(2018, 2, 23), TONY_STARK.username, PETER_PARKER_POST_1.id);

// Setup static mock data to use
exports.default = {
  USERS: [TONY_STARK, STEVE_ROGERS, BRUCE_BANNER, PETER_PARKER],
  POSTS: [TONY_STARK_POST_1, TONY_STARK_POST_2, STEVE_ROGERS_POST_1, BRUCE_BANNER_POST_1, PETER_PARKER_POST_1],
  COMMENTS: [TONY_STARK_COMMENT_1, TONY_STARK_COMMENT_2, STEVE_ROGERS_COMMENT_1, BRUCE_BANNER_COMMENT_1, TONY_STARK_COMMENT_3]
};