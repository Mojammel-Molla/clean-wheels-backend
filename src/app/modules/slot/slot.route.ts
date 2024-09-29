import express from 'express'
import { SlotControllers } from './slot.controller'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()

router.post('/', auth(USER_ROLE.user), SlotControllers.createSlot)
router.get('/', SlotControllers.getAllSlots)
router.get('/:id', SlotControllers.getSingleSlot)

export const SlotRoutes = router
