/*
  global describe
  global it
*/

const request = require('supertest')
const expect = require('chai').expect
// const mockData = require('../dist/mockData').default

describe('Routing', function () {
  const url = 'localhost:8081'
  describe('Users', function () {
    it('Should be able to get a list of all users', function (done) {
      request(url)
        .get('/users')
        .send()
        .end(function (err, res) {
          if (err) throw err
          expect(res.status).to.equal(200)
          expect(res.body.users.length).to.equal(4)
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
          expect(res.body.user.id).to.equal('1')
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
          expect(res.status).to.equal(200)
          expect(res.body.posts.length).to.equal(5)
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
          expect(res.status).to.equal(200)
          expect(res.body.comments.length).to.equal(5)
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
