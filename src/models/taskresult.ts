

export class TaskResult<T> {
  success: boolean;
  message: string;
  data: T;
  constructor(){
    this.success = false;
    this.message = '';
    this.data = null;
  }
}
