import express from 'express'
import { BookingControllers } from './booking.controller'
import validateRequest from '../../middlewares/validateRequests'
import bookingValidationSchema from './booking.validation'
import auth from '../../middlewares/auth'

const router = express.Router()

router.post(
  '/',
  validateRequest(bookingValidationSchema),
  BookingControllers.createBooking
)
router.get('/', auth(), BookingControllers.getAllBookings)
router.get('/:id', BookingControllers.getSingleBooking)

export const BookingRoutes = router
