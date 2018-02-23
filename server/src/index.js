import Express from 'express'
import {
  PostsController,
  CommentsController,
  UsersController
} from './controllers'

const app = Express()
const PORT = process.env.PORT || 8081

app.get('/users', UsersController.index)
app.get('/users/:id', UsersController.show)
app.get('/posts', PostsController.index)
app.get('/comments', CommentsController.index)

app.listen(PORT)

console.log('Server started successfully')
