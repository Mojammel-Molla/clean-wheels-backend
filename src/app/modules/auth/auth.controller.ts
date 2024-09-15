import config from '../../config'
import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'

import { AuthServices } from './auth.service'

const loginUser = catchAsync(async (req, res) => {
  const { accessToken, user } = await AuthServices.logInUser(req.body)

  // res.cookie('refreshToken', refreshToken, {
  //   httpOnly: true,
  //   secure: config.NODE_ENV === 'production',
  // })

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User logged in successfully!',
    data: {
      accessToken,
      user,
    },
  })
})

export const AuthControllers = {
  loginUser,
}
