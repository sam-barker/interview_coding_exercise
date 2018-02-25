/*
  global describe
  global it
*/

const request = require('supertest')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect
const mockData = require('../dist/mockData').default

describe('API', function () {
  const url = 'localhost:8080/api'
  describe('Users', function () {
    it('Should be able to get a list of all users', function (done) {
      request(url)
        .get('/users')
        .send()
        .end(function (err, res) {
          if (err) throw err
          expect(res.status).to.equal(200)
          // eql for deep comparison
          expect(res.body.users).to.eql(mockData.USERS)
          done()
        })
    })

    it('Should be able to fetch a user', function (done) {
      request(url)
        .get('/users/1')
        .send()
        .end(function (err, res) {
          if (err) throw err
          expect(res.status).to.equal(200)
          expect(res.body.user).to.eql(mockData.USERS[0])
          done()
        })
    })
  })

  describe('Posts', function () {
    it('Should be able to get a list of all posts', function (done) {
      request(url)
        .get('/posts')
        .send()
        .end(function (err, res) {
          if (err) throw err
          for (let i = 0; i < res.body.posts.length; i++) {
            const post = res.body.posts[i]
            const foundPost = mockData.POSTS.find(function (otherPost) {
              return post.id === otherPost.id
            })

            should.exist(foundPost)
          }
          expect(res.status).to.equal(200)
          done()
        })
    })

    it('Should be able to fetch posts for a specific user', function (done) {
      request(url)
        .get('/posts?userId=1')
        .send()
        .end(function (err, res) {
          if (err) throw err
          expect(res.status).to.equal(200)
          expect(res.body.posts.length).to.equal(2)
          done()
        })
    })
  })

  describe('Comments', function () {
    it('Should be able to get a list of all comments', function (done) {
      request(url)
        .get('/comments')
        .send()
        .end(function (err, res) {
          if (err) throw err
          for (let i = 0; i < res.body.comments.length; i++) {
            const comment = res.body.comments[i]
            const foundComment = mockData.COMMENTS.find(function (otherComment) {
              return comment.id === otherComment.id
            })

            should.exist(foundComment)
          }
          expect(res.status).to.equal(200)
          done()
        })
    })

    it('Should be able to fetch comments for a specific post', function (done) {
      request(url)
        .get('/comments?postId=1')
        .send()
        .end(function (err, res) {
          if (err) throw err
          expect(res.status).to.equal(200)
          expect(res.body.comments.length).to.equal(1)
          done()
        })
    })
  })
})
