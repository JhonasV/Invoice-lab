import {TaskResult} from '../models/taskresult'

export interface IBaseService<T> {
  GetAll(): Promise<TaskResult<T[]>>;
  GetOne(id: number): Promise<TaskResult<T>>;
  Save(entity: T): Promise<TaskResult<T>>;
  Delete(id: number): Promise<TaskResult<T>>;
  Update(id: number, entity: T): Promise<TaskResult<T>>;
}
