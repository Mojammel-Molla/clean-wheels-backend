import { Types } from 'mongoose'

type TVehicleType =
  | 'car'
  | 'truck'
  | 'suv'
  | 'van'
  | 'motorcycle'
  | 'bus'
  | 'electricVehicle'
  | 'hybridVehicle'
  | 'bicycle'
  | 'tractor'

export type TBooking = {
  customer: string
  service: Types.ObjectId
  slot: Types.ObjectId
  vehicleType: TVehicleType
  vehicleBrand: string
  vehicleModel: string
  manufacturingYear: number
  registrationPlate: string
}
