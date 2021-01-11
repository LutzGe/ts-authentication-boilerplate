import { Router } from "express";
import AuthController from './src/app/controllers/AuthController'
import UserController from './src/app/controllers/UserController'
import authMiddleware from './src/app/middlewares/AuthMiddleware'
const router = Router()

router.post('/users', UserController.store)
router.post('/auth', AuthController.authenticate)
router.get('/dash', authMiddleware, UserController.index)

export default router