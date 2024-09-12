import { TBooking } from './booking.interface'
import { BookingModel } from './booking.model'

const createBookingIntoDB = async (payload: TBooking) => {
  const result = await BookingModel.create(payload)
  return result
}

export const BookingServices = {
  createBookingIntoDB,
}
