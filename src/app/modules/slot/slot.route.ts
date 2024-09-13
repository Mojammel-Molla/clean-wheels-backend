import express from 'express'
import { SlotControllers } from './slot.controller'

const router = express.Router()

router.post('/services/slots', SlotControllers.createSlot)

export const SlotRoutes = router
