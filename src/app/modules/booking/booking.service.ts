import { TBooking } from './booking.interface'
import { BookingModel } from './booking.model'

const createBookingIntoDB = async (payload: TBooking) => {
  const result = await BookingModel.create(payload)
  return result
}

const getAllBookingsFromDB = async () => {
  const result = await BookingModel.find()
    .populate('customer')
    .populate('service')
    .populate('slot')

  return result
}

const getSingleBookingFromDB = async (id: string) => {
  const result = await BookingModel.findOne({ _id: id })
  return result
}

const getMyBookingsFromDB = async (id: string) => {
  const result = await BookingModel.find({ customer: id })
    .populate('service')
    .populate('slot')

  return result
}

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  getMyBookingsFromDB,
  getSingleBookingFromDB,
}
