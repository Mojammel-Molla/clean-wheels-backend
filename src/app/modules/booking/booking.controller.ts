import { RequestHandler } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BookingServices } from './booking.service'

const createBooking: RequestHandler = catchAsync(async (req, res) => {
  const newBooking = req.body
  const result = await BookingServices.createBookingIntoDB(newBooking)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Booking is created successfully',
    data: result,
  })
})

const getAllBookings: RequestHandler = catchAsync(async (req, res) => {
  console.log('test', req.user)
  const result = await BookingServices.getAllBookingsFromDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All Booking are retrieved successfully',
    data: result,
  })
})

const getMyBooking: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  const bookings = await BookingServices.getMyBookingsFromDB(id)

  if (!bookings.length) {
    return res.status(404).json({
      success: false,
      message: 'No bookings found for this user',
    })
  }

  return sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'My Bookings retrieve successfully',
    data: bookings,
  })
})

const getSingleBooking: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await BookingServices.getSingleBookingFromDB(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Single Booking retrieve successfully',
    data: result,
  })
})
export const BookingControllers = {
  createBooking,
  getAllBookings,
  getMyBooking,
  getSingleBooking,
}
