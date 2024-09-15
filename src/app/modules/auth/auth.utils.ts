import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
export const createToken = (
  jwtPayload: { email: string; role: string },
  secret: string,
  expiresIn: string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  })
}

export const isPasswordMatched = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatched = await bcryptjs.compare(plainPassword, hashedPassword)
  return isMatched
}
