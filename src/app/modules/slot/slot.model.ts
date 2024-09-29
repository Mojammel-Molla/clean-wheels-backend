import { Schema, model, Types } from 'mongoose'
import { TSlot } from './slot.interface'

const slotSchema = new Schema(
  {
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
      default: 'available',
      enum: ['available', 'booked', 'canceled'],
      // required: [true, 'Slot status is required'],
    },
  },
  {
    timestamps: true,
  }
)

slotSchema.pre('save', async function (next) {
  // const slot = this

  // Check if a slot already exists with the same service, date, start time, and end time
  const existingSlot = await SlotModel.findOne({
    service: this.service,
    date: this.date,
    startTime: this.startTime,
    endTime: this.endTime,
  })

  if (existingSlot) {
    const error = new Error(
      'A slot with the same service, date, and time already exists'
    )
    return next(error)
  }

  next()
})

export const SlotModel = model<TSlot>('Slot', slotSchema)
