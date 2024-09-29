import { RequestHandler } from 'express'
import catchAsync from '../../utils/catchAsync'
import { ReviewServices } from './review.service'
import sendResponse from '../../utils/sendResponse'

const createReview: RequestHandler = catchAsync(async (req, res) => {
  const result = await ReviewServices.createReviewIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service is created successfully',
    data: result,
  })
})

const getAllReviews: RequestHandler = catchAsync(async (req, res) => {
  const result = await ReviewServices.getAllReviewsFromDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service are retrieved successfully',
    data: result,
  })
})

export const ReviewControllers = {
  createReview,
  getAllReviews,
}
