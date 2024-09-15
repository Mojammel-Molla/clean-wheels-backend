import express from 'express'
import { UserControllers } from './user.controller'
import validateRequest from '../../middlewares/validateRequests'
import userValidationSchema from './user.validation'

const router = express.Router()

router.post(
  '/',
  validateRequest(userValidationSchema),
  UserControllers.createUser
)
router.get('/', UserControllers.getAllUsers)
router.get('/:id', UserControllers.getSingleUser)

export const UserRoutes = router
