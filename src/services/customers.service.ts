import { IBaseService } from './base.service'
import { Customers, CustomersModel, ICustomersAddModel } from '../models/customers'
import TaskResult from '../models/taskresult'

export class CustomersService implements IBaseService<CustomersModel> {

  async GetAll(): Promise<TaskResult<CustomersModel[]>> {
    const result = new TaskResult<CustomersModel[]>()
    try {
      const customers = await Customers.findAll()
      result.data = customers;
      result.addMessage('Customers retreives succesfully')
    } catch (error) {
      result.addErrorMessage(`Error: ${error?.message}`)
    }

    return result;
  }

  async GetOne(id: number): Promise<TaskResult<CustomersModel>> {
    const result = new TaskResult<CustomersModel>()
    try {
      const customer = await Customers.findOne({where: {id}})
      if(customer){
        result.data = customer;
        result.addMessage("Customer retreives succesfully")
      }else{
        result.addErrorMessage("Customer Not Found")
      }


    } catch (error) {
      result.addErrorMessage(`Error: ${error?.message}`)
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
      result.addMessage("Customer created succesfully!")
    } catch (error) {
      result.addErrorMessage(`Error: ${error?.message}`)
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
        result.addMessage('Customer deleted succesfully')

      }else{
        result.addErrorMessage(customer.message)
      }
    } catch (error) {
      result.addErrorMessage( `Error: ${error?.message}`);
    }

    return result;
  }
  async Update(id: number, entity: CustomersModel): Promise<TaskResult<CustomersModel>> {
    const result = new TaskResult<CustomersModel>()
    try {
      let customer = await this.GetOne(id)
      if(customer.success){
        let customerUpdated = await customer.data.update(entity)
        result.data = customerUpdated
        result.addMessage('Customer updated succesfully')
      }else{
        result.addErrorMessage( customer.message);
      }
    } catch (error) {
      result.addErrorMessage(`Error: ${error?.message}`);
    }

    return result;
  }
}
