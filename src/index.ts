import * as express from 'express'
import { config as dotEnvConfig } from 'dotenv'
import * as cors from 'cors'
import { customerRouter } from './routers/customers.router'
dotEnvConfig({path: __dirname + '../../.env'})



const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.use('/api/v1/customers', customerRouter)

app.get('/', (req, res, next) => {
  res.json('hello world')
})



app.listen(process.env.SERVER_PORT , () => console.log(`Server running on port ${process.env.SERVER_PORT}`))
