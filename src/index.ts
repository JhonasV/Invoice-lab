import * as express from 'express'
import { config as dotEnvConfig } from 'dotenv'
import * as cors from 'cors'
import routers from './routers'


class Server {
  app: express.Application
  constructor(){
    this.app =  express()
    this.middlewares()
    routers(this.app)
    this.init()
  }

  middlewares(){
    dotEnvConfig({path: __dirname + '../../.env'})
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}))
    this.app.use(cors())

  }

  init(){
    this.app.listen(process.env.SERVER_PORT , () => console.log(`Server running on port ${process.env.SERVER_PORT}`))
  }
}

new Server()
