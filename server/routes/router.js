import express from 'express'
import  { createUser, getUser, updateUser, deleteUser } from '../controller/userLogic.js'
const routes = express.Router()

routes.post("/createuser", createUser)
routes.get("/getuser", getUser)
routes.put("/updateuser/:userId", updateUser)
routes.delete("/deleteuser/:userId", deleteUser)

export default routes