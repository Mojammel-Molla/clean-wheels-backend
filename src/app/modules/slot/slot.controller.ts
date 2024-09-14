import { RequestHandler } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { SlotServices } from './slot.service'

const createSlot: RequestHandler = catchAsync(async (req, res) => {
  const result = await SlotServices.createSlotIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Slot is booked successfully',
    data: result,
  })
})

const getAllSlots: RequestHandler = catchAsync(async (req, res) => {
  const result = await SlotServices.getAllSlotsFromDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All Slots are retrieved successfully',
    data: result,
  })
})

const getSingleSlot: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await SlotServices.getSingleSlotFromDB(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Single Booking retrieve successfully',
    data: result,
  })
})
export const SlotControllers = {
  createSlot,
  getAllSlots,
  getSingleSlot,
}
