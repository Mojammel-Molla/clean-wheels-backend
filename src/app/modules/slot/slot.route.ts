import express from 'express'
import { SlotControllers } from './slot.controller'

const router = express.Router()

router.post('/', SlotControllers.createSlot)
router.get('/', SlotControllers.getAllSlots)
router.get('/:id', SlotControllers.getSingleSlot)

export const SlotRoutes = router
