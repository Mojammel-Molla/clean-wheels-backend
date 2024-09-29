import express from 'express'
import { ServiceControllers } from './service.controller'
import { USER_ROLE } from '../user/user.constant'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post('/', auth(USER_ROLE.admin), ServiceControllers.createService)
router.get('/', ServiceControllers.getAllServices)
router.get('/:id', ServiceControllers.getSingleService)
router.put('/:id', auth(USER_ROLE.admin), ServiceControllers.updateService)
router.delete('/:id', auth(USER_ROLE.admin), ServiceControllers.deleteService)

export const ServiceRoutes = router
