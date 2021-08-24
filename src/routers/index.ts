import { customerRouter } from "./customers.router"
import {Express} from 'express'

export default (app: Express) => {
  app.use('/api/v1/customers', customerRouter)
}
