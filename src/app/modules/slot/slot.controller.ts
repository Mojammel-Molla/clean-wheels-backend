import { RequestHandler } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { SlotServices } from './slot.service'
import moment from 'moment'

const createSlot: RequestHandler = catchAsync(async (req, res) => {
  const serviceDuration = 60

  // Extract the request body details
  const { service, date, startTime, endTime } = req.body

  // Convert start and end time to minutes from midnight (00:00)
  const startMinutes = moment.duration(startTime).asMinutes()
  const endMinutes = moment.duration(endTime).asMinutes()

  // Calculate total available duration
  const totalDuration = endMinutes - startMinutes

  // Calculate the number of slots
  const numberOfSlots = Math.floor(totalDuration / serviceDuration)

  // Generate slots
  const slots = []
  for (let i = 0; i < numberOfSlots; i++) {
    const slotStartTime = moment()
      .startOf('day')
      .add(startMinutes + i * serviceDuration, 'minutes')
      .format('HH:mm')
    const slotEndTime = moment()
      .startOf('day')
      .add(startMinutes + (i + 1) * serviceDuration, 'minutes')
      .format('HH:mm')

    const slot = {
      _id: `${service}-${i}`, // Create a unique ID for each slot
      service,
      date,
      startTime: slotStartTime,
      endTime: slotEndTime,
      isBooked: 'available',
      //  createdAt: new Date().toISOString(),
      //  updatedAt: new Date().toISOString(),
    }

    slots.push(slot)
  }
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: ' Slots are created successfully',
    data: slots,
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
