import { TUser } from './user.interface'
import { UserModel } from './user.model'

const createUserIntoDB = async (payload: TUser) => {
  const user = await UserModel.findOne({ email: payload.email })

  if (user) {
    throw new Error('User already exists')
  }

  //create user
  const newUser = await UserModel.create(payload)

  return newUser
}

const getAllUserFromDB = async () => {
  const result = await UserModel.find()
  return result
}

const getSingleUserFromDB = async (id: string) => {
  const result = await UserModel.findOne({ _id: id })
  return result
}
export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
}
