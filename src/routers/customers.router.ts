import { Router } from "express";
import { matchedData, validationResult } from "express-validator";
import { customersRules } from "../rules/customers.rules";
import {Request, Response} from 'express'
import { CustomersService } from "../services/customers.service";
import {CustomersModel} from '../models/customers'
import { TaskResult } from "../models/taskresult";


export const customerRouter = Router()
const customersService = new CustomersService()

customerRouter.get('/all', async (req: Request, res: Response) => res.json(await customersService.GetAll()))

customerRouter.post('/create', customersRules['forSave'], async (req: Request, res: Response) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
      let result: TaskResult<any[]> = {data: errors.array(), success: false, message: 'Validation Error'}
      return res.status(422).json(result)
    }

    res.json(await customersService.Save(matchedData(req) as CustomersModel))
})

customerRouter.get('/:customerId', async (req: Request, res: Response) => res.json(await customersService.GetOne(Number(req.params.customerId))))

customerRouter.delete('/:customerId', async (req: Request, res: Response) => res.json(await customersService.Delete(Number(req.params.customerId))))

customerRouter.put('/:customerId', customersRules['forSave'], async (req: Request, res: Response) => {
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    let result: TaskResult<any[]> = {data: errors.array(), success: false, message: 'Validation Error'}
    return res.status(422).json(result)
  }

  res.json(await customersService.Update(Number(req.params.customerId), matchedData(req) as CustomersModel))
})
