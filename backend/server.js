import express from 'express'
import connection from './connection.js'
import env from 'dotenv'
import cors from 'cors'
import router from './router.js'

env.config()

const app=express()
app.use(cors())

app.use(express.json({limit:"50mb"}));
app.use('/api',router)

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
console.log(`server started on ${process.env.PORT}`);

    })
}).catch((error)=>{
    console.log(error);
})