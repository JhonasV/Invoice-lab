import { Sequelize } from 'sequelize'
import { config as dotEnvConfig } from 'dotenv'
dotEnvConfig({path: __dirname + '../../../.env'})

const db = process.env.DB_NAME
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
const port = Number(process.env.DB_PORT)
const host = process.env.DB_HOST



export const sequelize = new Sequelize(db, username, password, {
  host,
  port,
  dialect: 'mysql'
})


sequelize.authenticate()



