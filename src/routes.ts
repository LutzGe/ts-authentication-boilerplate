import { Router } from "express";
import AuthController from './app/controllers/AuthController'
import UserController from './app/controllers/UserController'
import authMiddleware from './app/middlewares/AuthMiddleware'
const router = Router()

router.post('/users', UserController.store)
router.post('/auth', AuthController.authenticate)
router.get('/dash', authMiddleware, UserController.index)

export default router