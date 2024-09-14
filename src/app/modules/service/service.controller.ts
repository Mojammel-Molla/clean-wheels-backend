import { RequestHandler } from 'express'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { Services } from './service.services'

const createService: RequestHandler = catchAsync(async (req, res) => {
  const result = await Services.createServiceIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service is created successfully',
    data: result,
  })
})

const getAllServices: RequestHandler = catchAsync(async (req, res) => {
  const result = await Services.getAllServicesFromDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service are retrieved successfully',
    data: result,
  })
})

const getSingleService: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await Services.getSingleServiceFromDB(id)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Single Service retrieve successfully',
    data: result,
  })
})

const updateService = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await Services.updateServiceIntoDB(id, req.body)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'service update successfully',
    data: result,
  })
})

const deleteService = catchAsync(async (req, res) => {
  const { id } = req.params
  const result = await Services.deleteServiceFromDB(id)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service is deleted successfully',
    data: result,
  })
})
export const ServiceControllers = {
  createService,
  getAllServices,
  getSingleService,
  updateService,
  deleteService,
}
