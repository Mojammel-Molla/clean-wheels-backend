import express from 'express'
import { BookingControllers } from './booking.controller'
import validateRequest from '../../middlewares/validateRequests'
import bookingValidationSchema from './booking.validation'
import auth from '../../middlewares/auth'
import { USER_ROLE } from '../user/user.constant'

const router = express.Router()

router.post(
  '/',
  // auth(USER_ROLE.user),
  validateRequest(bookingValidationSchema),
  BookingControllers.createBooking
)
router.get('/', auth(USER_ROLE.admin), BookingControllers.getAllBookings)
router.get('/:id', BookingControllers.getSingleBooking)
router.get('/my-bookings', BookingControllers.getMyBooking)

export const BookingRoutes = router
