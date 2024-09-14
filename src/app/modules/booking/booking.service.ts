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

const getSingleBookingFromDB = async (id: string) => {
  const result = await BookingModel.findOne({ _id: id }).populate('customer')
  // .populate('Service')
  // .populate('Customer')
  return result
}

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  getSingleBookingFromDB,
}
