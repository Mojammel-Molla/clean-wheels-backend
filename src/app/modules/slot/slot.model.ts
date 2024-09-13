import { Schema, model, Types } from 'mongoose'
import { TSlot } from './slot.interface'

const slotSchema = new Schema({
  service: {
    type: Types.ObjectId,
    ref: 'Service',
    required: [true, 'Service reference is required'],
  },
  date: {
    type: Date,
    required: [true, 'Booking date is required'],
  },
  startTime: {
    type: String,
    required: [true, 'Start time is required'],
  },
  endTime: {
    type: String,
    required: [true, 'End time is required'],
  },
  isBooked: {
    type: String,
    enum: ['available', 'booked', 'canceled'],
    required: [true, 'Slot status is required'],
  },
})

export const SlotModel = model<TSlot>('Slot', slotSchema)
