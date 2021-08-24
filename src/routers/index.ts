import { customerRouter } from "./customers.router"
import * as express from 'express'

export default (app: express.Applicationn) => {
  app.use('/api/v1/customers', customerRouter)
}
