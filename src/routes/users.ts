import { Router } from "express"

import UserController from '../app/controllers/UserController'

const UserRouter = Router()

UserRouter.get('/index/', UserController.index)

UserRouter.post('/create', UserController.create)

UserRouter.post('/delete/', UserController.delete)

UserRouter.post('/update/', UserController.update)




export default UserRouter