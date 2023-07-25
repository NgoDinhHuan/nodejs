import express from 'express'
import * as dotenv from 'dotenv'
import {
    usersRouter,
    studentsRouter
} from './routes/index.js'

// send test request => use postman
dotenv.config() // bat buoc co
import connect from './database/database.js'
const app = express()
app.use(express.json())// cho phep doc duoc the body cua request
const port = process.env.PORT ?? 3000// bien moi truong

//routers
app.use('/users',usersRouter)
app.use('/students',studentsRouter)
app.get('/',(req,res) => {
    res.send('response from router!')
})


app.listen(port, async()=>{
    await connect()
    console.log(`listening on port :${port}`);
}) 

   