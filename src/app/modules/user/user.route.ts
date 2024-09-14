import express from 'express'
import { UserControllers } from './user.controller'
import validateRequest from '../../middlewares/validateRequests'
import userValidationSchema from './user.validation'

const router = express.Router()

router.post(
  '/signup',
  validateRequest(userValidationSchema),
  UserControllers.createUser
)
router.get('/signup', UserControllers.getAllUsers)
router.get('/signup/:id', UserControllers.getSingleUser)

export const UserRoutes = router
