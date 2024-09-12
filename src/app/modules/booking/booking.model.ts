import { Schema, model, Types } from 'mongoose'

const bookingSchema = new Schema({
  customer: {
    type: String,
    required: [true, 'Customer reference is required'],
  },
  service: {
    type: Types.ObjectId,
    ref: 'Service',
    required: [true, 'Service reference is required'],
  },
  slot: {
    type: Types.ObjectId,
    ref: 'Slot',
    required: [true, 'Slot reference is required'],
  },
  vehicleType: {
    type: String,
    enum: {
      values: [
        'car',
        'truck',
        'suv',
        'van',
        'motorcycle',
        'bus',
        'electricVehicle',
        'hybridVehicle',
        'bicycle',
        'tractor',
      ],
      message: '{VALUE} is not a valid vehicle type',
    },
    required: [true, 'Vehicle type is required'],
  },
  vehicleBrand: {
    type: String,
    required: [true, 'Vehicle brand is required'],
  },
  vehicleModel: {
    type: String,
    required: [true, 'Vehicle model is required'],
  },
  manufacturingYear: {
    type: Number,
    required: [true, 'Manufacturing year is required'],
  },
  registrationPlate: {
    type: String,
    required: [true, 'Registration plate is required'],
  },
})

export const BookingModel = model('Booking', bookingSchema)
