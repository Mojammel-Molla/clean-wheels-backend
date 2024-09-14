import { TSlot } from './slot.interface'
import { SlotModel } from './slot.model'

const createSlotIntoDB = async (payload: TSlot) => {
  const result = await SlotModel.create(payload)
  return result
}

const getAllSlotsFromDB = async () => {
  const result = await SlotModel.find()
  return result
}

const getSingleSlotFromDB = async (id: string) => {
  const result = await SlotModel.findOne({ _id: id })
  return result
}

export const SlotServices = {
  createSlotIntoDB,
  getAllSlotsFromDB,
  getSingleSlotFromDB,
}
