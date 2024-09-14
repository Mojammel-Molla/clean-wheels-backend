import express from 'express'
import { UserControllers } from './user.controller'

const router = express.Router()

router.post('/signup', UserControllers.createUser)
router.get('/signup', UserControllers.getAllUsers)
router.get('/signup/:id', UserControllers.getSingleUser)

export const UserRoutes = router
