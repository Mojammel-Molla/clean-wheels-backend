import { TService } from './service.interface'
import { ServiceModel } from './service.model'

const createServiceIntoDB = async (payload: TService) => {
  const result = await ServiceModel.create(payload)
  return result
}

const getAllServicesFromDB = async () => {
  const result = await ServiceModel.find()
  return result
}

const getSingleServiceFromDB = async (id: string) => {
  const result = await ServiceModel.findOne({ _id: id })
  return result
}

const updateServiceIntoDB = async (id: string, payload: Partial<TService>) => {
  const result = await ServiceModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  })
  return result
}

const deleteServiceFromDB = async (id: string) => {
  const result = await ServiceModel.findOneAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true }
  )

  return result
}

export const Services = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
  updateServiceIntoDB,
  deleteServiceFromDB,
}
