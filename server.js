import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config() // bat buoc co
const app = express()


const port = process.env.PORT ?? 3000// bien moi truong
app.get('/',(req,res) => {
    res.send('response from router!')
})


app.listen(port, async()=>{
    console.log(`listening on port :${port}`);
}) 

   