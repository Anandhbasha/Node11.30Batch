import express from 'express'
import { add, delete_data, read, update } from '../Controller/Controller.js'
const route = express.Router()

route.get("/",read)
route.post('/',add)
route.put('/:id',update)
route.delete('/:id',delete_data)
export default route;