import AppError from '../../errors/appError'
import { UserModel } from '../user/user.model'
import { TLoginUser } from './auth.interface'
import { isPasswordMatched } from './auth.utils'
import { createToken } from './auth.utils'
import config from '../../config'

const logInUser = async (payload: TLoginUser) => {
  const user = await UserModel.findOne({ email: payload.email }).select(
    '+password'
  )

  if (!user) {
    throw new AppError(404, 'User not found')
  }

  const passwordMatch = await isPasswordMatched(payload.password, user.password)

  if (!passwordMatch) {
    throw new AppError(401, 'Password not matched')
  }

  const jwtPayload = {
    email: user.email,
    role: user.role,
  }

  const token = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  )

  return {
    token,
    user,
  }
}

export const AuthServices = {
  logInUser,
}
