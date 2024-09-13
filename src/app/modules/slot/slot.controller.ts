import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { SlotServices } from './slot.service'

const createSlot = catchAsync(async (req, res) => {
  const result = await SlotServices.createSlotIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Slot is booked successfully',
    data: result,
  })
})

export const SlotControllers = {
  createSlot,
}
