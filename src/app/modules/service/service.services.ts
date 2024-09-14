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
export const Services = {
  createServiceIntoDB,
  getAllServicesFromDB,
  getSingleServiceFromDB,
}
