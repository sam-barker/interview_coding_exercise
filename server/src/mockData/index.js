import {
  User,
  Post,
  Comment
} from '../models'

const TONY_STARK = new User('1', 'i_am_iron_man', 'tony@starkindustries.com')
const STEVE_ROGERS = new User('2', 'first_avenger', 'steverogers@aol.com')
const BRUCE_BANNER = new User('3', 'green_and_mean', 'brucebanner@gmail.com')
const PETER_PARKER = new User('4', 'web_head', 'peterparker@hotmail.com')

const TONY_STARK_POST_1 = new Post(
  '1',
  'I am Iron Man!',
  new Date(2006, 2, 23),
  'Time to admit it ... I AM IRON MAN',
  TONY_STARK.id
)

const TONY_STARK_POST_2 = new Post(
  '2',
  'I made ultron',
  new Date(2013, 7, 14),
  'So yeah, I made Ultron. it was a mistake',
  TONY_STARK.id
)

const STEVE_ROGERS_POST_1 = new Post(
  '3',
  'How do I use this?',
  new Date(2012, 3, 16),
  'What even is this? Where is the radio?',
  STEVE_ROGERS.id
)

const BRUCE_BANNER_POST_1 = new Post(
  '4',
  'HULK SMASH',
  new Date(2015, 1, 3),
  'RAWWWRRRRRRRRRRRR',
  BRUCE_BANNER.id
)

const PETER_PARKER_POST_1 = new Post(
  '5',
  'Being Spidey is tiring!',
  new Date(2018, 2, 22),
  'I got no homework done last night! I was too busy fighting the Green Goblin!',
  PETER_PARKER.id
)

const TONY_STARK_COMMENT_1 = new Comment(
  '1',
  'Just give up Cap!',
  new Date(2012, 3, 18),
  TONY_STARK.username,
  STEVE_ROGERS_POST_1.id
)

const TONY_STARK_COMMENT_2 = new Comment(
  '2',
  `You won't like him when he's angry!`,
  new Date(2015, 1, 4),
  TONY_STARK.username,
  BRUCE_BANNER_POST_1.id
)

const STEVE_ROGERS_COMMENT_1 = new Comment(
  '3',
  'We all knew that!',
  new Date(2018, 2, 23),
  STEVE_ROGERS.username,
  TONY_STARK_POST_1.id
)

const BRUCE_BANNER_COMMENT_1 = new Comment(
  '4',
  `Don't you mean WE?`,
  new Date(2013, 7, 15),
  BRUCE_BANNER.username,
  TONY_STARK_POST_2.id
)

const TONY_STARK_COMMENT_3 = new Comment(
  '5',
  'You should always do your homework kid',
  new Date(2018, 2, 23),
  TONY_STARK.username,
  PETER_PARKER_POST_1.id
)

export default {
  USERS: [
    TONY_STARK,
    STEVE_ROGERS,
    BRUCE_BANNER,
    PETER_PARKER
  ],
  POSTS: [
    TONY_STARK_POST_1,
    TONY_STARK_POST_2,
    STEVE_ROGERS_POST_1,
    BRUCE_BANNER_POST_1,
    PETER_PARKER_POST_1
  ],
  COMMENTS: [
    TONY_STARK_COMMENT_1,
    TONY_STARK_COMMENT_2,
    STEVE_ROGERS_COMMENT_1,
    BRUCE_BANNER_COMMENT_1,
    TONY_STARK_COMMENT_3
  ]
}
