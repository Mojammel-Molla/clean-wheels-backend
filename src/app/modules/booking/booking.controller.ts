import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { BookingServices } from './booking.service'

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.createBookingIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Booking is created successfully',
    data: result,
  })
})

export const BookingControllers = {
  createBooking,
}
