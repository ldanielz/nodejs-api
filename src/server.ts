import 'reflect-metadata'
import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { router } from './routes/'

import swaggerDocument from './swagger.json'

import './database'
import './shared/container'
const app = express()

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(router)

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
