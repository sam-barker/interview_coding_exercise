import {
  PostsController,
  CommentsController,
  UsersController
} from '../controllers'

export function setup (app) {
  app.get('/users', UsersController.index)
  app.get('/users/:id', UsersController.show)
  app.get('/posts', PostsController.index)
  app.get('/comments', CommentsController.index)
}
