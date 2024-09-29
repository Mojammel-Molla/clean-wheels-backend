import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorhandler'
import cookieParser from 'cookie-parser'
import notFound from './app/middlewares/notFound'

app.use(express.json())
app.use(cors())

app.use(cookieParser())

app.use(cors({ origin: ['http://localhost:5173'] }))
app.use('/api', router)

app.use(globalErrorHandler)

app.use(notFound)

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to clean wheels!')
})

export default app
