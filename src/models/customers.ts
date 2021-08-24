import * as Sequelize from 'sequelize'
import { sequelize } from "../instances/sequelize";

export interface ICustomersAddModel {
  id: number,
  identification: string,
  name: string,
  telephone: string,
  email: string,
  category: string
}

export class CustomersModel extends Sequelize.Model<CustomersModel, ICustomersAddModel> {
  id: number;
  identification: string;
  name: string;
  telephone: string;
  email: string;
  category: string;
}
export interface ICustomersViewModel  {
  id: number,
  identification: string,
  name: string,
  telephone: string,
  email: string,
  category: string
}

export const Customers = sequelize.define<CustomersModel, ICustomersAddModel>('Customers', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  identification: Sequelize.STRING,
  category: Sequelize.STRING,
  email: Sequelize.STRING,
  name: Sequelize.STRING,
  telephone: Sequelize.STRING,
}, {
  timestamps: false
})

