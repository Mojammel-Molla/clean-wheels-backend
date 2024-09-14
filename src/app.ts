import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import router from './app/routes'
import globalErrorHandler from './app/middlewares/globalErrorhandler'

app.use(express.json())
app.use(cors())

app.use('/api', router)

app.use(globalErrorHandler)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
