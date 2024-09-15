import { NextFunction, Request, Response } from 'express'
import catchAsync from '../utils/catchAsync'
import AppError from '../errors/appError'
import { jwt, jwtPayload } from 'jsonwebtoken'
import config from '../config'

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    if (!token) {
      throw new AppError(401, 'You are not authorized')
    }

    jwt.verify(
      token,
      config.jwt_access_secret as string,
      function (err, decoded): void {
        if (err) {
          throw new AppError(401, 'You are not authorized')
        }
        console.log(decoded)
        next()
      }
    )

    req.user = decoded as jwtPayload
  })
}

export default auth
