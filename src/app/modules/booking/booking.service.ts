import QueryBuilder from '../../builder/QueryBuilder'
import { TBooking } from './booking.interface'
import { BookingModel } from './booking.model'

const createBookingIntoDB = async (payload: TBooking) => {
  const result = await BookingModel.create(payload)
  return result
}

const getAllBookingsFromDB = async () => {
  const result = await BookingModel.find()
  return result
}

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
}
