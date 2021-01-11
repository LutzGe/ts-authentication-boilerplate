// imports de libs
import express from 'express'
import 'reflect-metadata'

// imports próprios
import './src/database/connect'
import routes from './routes'

const app = express()

app.use(express.json())

app.use(routes)


app.listen(3000, () => console.log('Server started at http://localhost:3000'))