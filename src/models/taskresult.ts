

class TaskResultBase{
  public success: boolean
  public message: string;

  constructor(){
    this.message = '';
    this.success = true;
  }


  addMessage(message: string):void{
    if(this.message.length > 0)
      this.message = `${this.message}, ${message}`
    else
      this.message = message;
  }

  addErrorMessage(message: string): void {
    if(this.message.length > 0)
      this.message = `${this.message}, ${message}`
    else
      this.message = message;

    this.success = false;
  }
}

export default class TaskResult<T> extends TaskResultBase{
  public data: T;

  constructor(){
    super()
    this.data = null;
  }
}
