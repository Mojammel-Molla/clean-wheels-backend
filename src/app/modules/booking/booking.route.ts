import express from 'express'
import { BookingControllers } from './booking.controller'
import validateRequest from '../../middlewares/validateRequests'
import bookingValidationSchema from './booking.validation'

const router = express.Router()

router.post(
  '/',
  validateRequest(bookingValidationSchema),
  BookingControllers.createBooking
)
router.get('/', BookingControllers.getAllBookings)
router.get('/:id', BookingControllers.getSingleBooking)

export const BookingRoutes = router
