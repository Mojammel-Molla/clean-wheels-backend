import express from 'express'
import { BookingControllers } from './booking.controller'
import validateRequest from '../../middlewares/validateRequests'
import bookingValidationSchema from './booking.validation'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()

router.post(
  '/',
  validateRequest(bookingValidationSchema),
  BookingControllers.createBooking
)
router.get('/', auth(USER_ROLE.ADMIN), BookingControllers.getAllBookings)
router.get('/:id', auth(), BookingControllers.getSingleBooking)

export const BookingRoutes = router
