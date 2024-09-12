import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { Services } from './service.services'

const createService = catchAsync(async (req, res) => {
  const result = await Services.createServiceIntoDB(req.body)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Service is created successfully',
    data: result,
  })
})

export const ServiceControllers = {
  createService,
}
