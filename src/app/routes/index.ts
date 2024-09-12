import { Router } from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { BookingRoutes } from '../modules/booking/booking.route'
import { ServiceRoutes } from '../modules/service/service.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/users',
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
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
