import express from 'express'
const app = express()
import {router as indexRouter} from './routes/index.js'
import {router as gamesRouter} from './routes/games.js'
import {connectDB} from './config/db.js'

//connectDB()

const __dirname = import.meta.dirname;


import dotenv from 'dotenv'
dotenv.config()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.use('/', indexRouter)
app.use('/games', gamesRouter)

app.listen(process.env.PORT || 3000)