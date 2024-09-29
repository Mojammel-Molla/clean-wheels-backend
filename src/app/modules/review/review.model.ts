import mongoose, { Schema } from 'mongoose'
import { TReview } from './review.interface'

const ReviewSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  service: {
    type: String,
    required: true,
  },
})

// Create the model
export const ReviewModel = mongoose.model<TReview>('Review', ReviewSchema)
