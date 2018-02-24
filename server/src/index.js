import Express from 'express'
import Morgan from 'morgan'
import {setup} from './routes'

const app = Express()
const PORT = process.env.PORT || 8081

// Add logging
app.use(Morgan('combined'))

// Add routes
setup(app)

app.listen(PORT)

console.log('Server started successfully!')
