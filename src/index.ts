import * as express from 'express'
import { config as dotEnvConfig } from 'dotenv'
import * as cors from 'cors'

import routers from './routers'
dotEnvConfig({path: __dirname + '../../.env'})

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

// mouting the routes
routers(app)

app.listen(process.env.SERVER_PORT , () => console.log(`Server running on port ${process.env.SERVER_PORT}`))
