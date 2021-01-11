import { Router } from "express";
import helmet from 'helmet'

import UserRouter from './users'

import AuthController from '../app/controllers/AuthController'

// import authMiddleware from '../app/middlewares/AuthMiddleware'

const router = Router()

router.use(helmet())
router.use('/users', UserRouter)

router.post('/auth', AuthController.authenticate)


export default router