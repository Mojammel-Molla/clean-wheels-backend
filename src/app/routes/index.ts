import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { BookingRoutes } from '../modules/booking/booking.route'
import { ServiceRoutes } from '../modules/service/service.route'
import { SlotRoutes } from '../modules/slot/slot.route'
import { AuthRoutes } from '../modules/auth/auth.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/auth/signup',
    route: UserRoutes,
  },
  {
    path: '/bookings',
    route: BookingRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/service/slots',
    route: SlotRoutes,
  },
  {
    path: '/auth/login',
    route: AuthRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
