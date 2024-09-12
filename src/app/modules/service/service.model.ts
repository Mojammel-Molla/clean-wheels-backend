import { Schema, model } from 'mongoose'
import { TService } from './service.interface'

const serviceSchema = new Schema({
  name: { type: String, required: [true, 'Service name is required'] },
  description: {
    type: String,
    required: [true, 'Service description is required'],
  },
  price: { type: Number, required: [true, 'Service price is required'] },
  duration: { type: Number, required: [true, 'Service duration is required'] },
  isDeleted: { type: Boolean, default: false },
})

export const ServiceModel = model<TService>('Service', serviceSchema)
