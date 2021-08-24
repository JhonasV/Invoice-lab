import { IBaseService } from './base.service'
import { Customers, CustomersModel, ICustomersAddModel } from '../models/customers'
import { TaskResult } from '../models/taskresult'

export class CustomersService implements IBaseService<CustomersModel> {

  async GetAll(): Promise<TaskResult<CustomersModel[]>> {
    const result = new TaskResult<CustomersModel[]>()
    try {
      const customers = await Customers.findAll()
      result.data = customers;
      result.message = "Customers retreives succesfully"
      result.success = true
    } catch (error) {
      result.message = `Error: ${error?.message}`;
    }

    return result;
  }

  async GetOne(id: number): Promise<TaskResult<CustomersModel>> {
    const result = new TaskResult<CustomersModel>()
    try {
      const customer = await Customers.findOne({where: {id}})
      if(customer){
        result.data = customer;
        result.message = "Customer retreives succesfully"
        result.success = true
      }else{
        result.message = "Customer Not Found"
      }


    } catch (error) {
      result.message = `Error: ${error?.message}`;
    }

    return result;
  }
  async Save(entity: CustomersModel): Promise<TaskResult<CustomersModel>> {
    const result = new TaskResult<CustomersModel>()
    try {
      let customer: ICustomersAddModel = {
        category: entity.category,
        email: entity.email,
        id: entity.id,
        identification: entity.identification,
        name: entity.name,
        telephone: entity.telephone
      }
      const saved = await Customers.create(customer)
      result.data = saved;
      result.success = true;
      result.message = "Customer created succesfully!"
    } catch (error) {
      result.message = `Error: ${error?.message}`;
    }

    return result;
  }
  async Delete(id: number): Promise<TaskResult<CustomersModel>> {
    const result = new TaskResult<CustomersModel>()
    try {
      const customer = await this.GetOne(id)
      if(customer.success){
        await customer.data.destroy()
        result.data = customer.data;
        result.message = 'Customer deleted succesfully'
        result.success = true
      }else{
        result.message = customer.message;
      }
    } catch (error) {
      result.message = `Error: ${error?.message}`;
    }

    return result;
  }
  async Update(id: number, entity: CustomersModel): Promise<TaskResult<CustomersModel>> {
    const result = new TaskResult<CustomersModel>()
    try {
      let customer = await this.GetOne(id)
      if(customer.success){
        let customerUpdated = await customer.data.update(entity)
        result.success = true
        result.data = customerUpdated
        result.message = 'Customer updated succesfully'
      }else{
        result.message = customer.message
      }
    } catch (error) {
      result.message = `Error: ${error?.message}`;
    }

    return result;
  }
}
