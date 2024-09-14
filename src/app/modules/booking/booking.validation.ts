import { z } from 'zod'

const bookingValidationSchema = z.object({
  body: z.object({
    customer: z.string().min(1, { message: 'Customer reference is required' }),
    service: z.string().min(1, { message: 'Service id is required' }),

    slot: z.string().min(1, { message: 'Slot id is required' }),
    vehicleType: z.enum(
      [
        'car',
        'truck',
        'suv',
        'van',
        'motorcycle',
        'bus',
        'electricVehicle',
        'hybridVehicle',
        'bicycle',
        'tractor',
      ],
      {
        errorMap: () => ({ message: 'Invalid vehicle type' }),
      }
    ),
    vehicleBrand: z.string().min(1, { message: 'Vehicle brand is required' }),
    vehicleModel: z.string().min(1, { message: 'Vehicle model is required' }),
    manufacturingYear: z
      .number()
      .min(1900, { message: 'Manufacturing year is required' }),
    registrationPlate: z
      .string()
      .min(1, { message: 'Registration plate is required' }),
  }),
})

export default bookingValidationSchema
