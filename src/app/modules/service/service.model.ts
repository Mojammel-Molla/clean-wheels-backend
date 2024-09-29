import { Schema, model } from 'mongoose'
import { TService } from './service.interface'

const serviceSchema = new Schema(
  {
    name: { type: String, required: [true, 'Service name is required'] },
    description: {
      type: String,
      required: [true, 'Service description is required'],
    },
    price: {
      type: Number,
      required: [true, 'Service price is required'],
    },
    duration: {
      type: Number,
      required: [true, 'Service duration is required'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
)

// Pre-save middleware to check for duplicates
serviceSchema.pre('save', async function (next) {
  // const service = this

  // Check if the service with the same name already exists
  const existingService = await ServiceModel.findOne({
    name: this.name,
    isDeleted: false,
  })

  if (existingService) {
    const error = new Error('Service with this name already exists')
    return next(error)
  }

  // Proceed to save if no duplicates are found
  next()
})

export const ServiceModel = model<TService>('Service', serviceSchema)
