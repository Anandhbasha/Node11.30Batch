import express from 'express'
import route from './Router/Router.js'
import Database from './Database/Database.js'
const app = express()

const PORT = 4212

Database("mongodb://127.0.0.1:27017/Newone")
app.use(express.json())
app.use(route)

app.listen(PORT,()=>{
    console.log(`Port is running under http://localhost:${PORT}`);
    
})