import { NextFunction, Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'
import AppError from '../errors/appError'
import config from '../config'
import jwt, { JwtPayload } from 'jsonwebtoken'
import { UserModel } from '../modules/user/user.model'
import { TUserRole } from '../modules/user/user.interface'

const auth = (...requiredRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      throw new AppError(401, 'You are not authorized')
    }

    const decoded = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload

    const { email, role } = decoded

    const user = await UserModel.findOne({ email })

    if (!user) {
      throw new AppError(401, 'User not found')
    }

    if (!requiredRoles.includes(role)) {
      throw new AppError(401, 'You are not authorized to access this route')
    }

    req.user = decoded as JwtPayload
    next()
  })
}

export default auth
