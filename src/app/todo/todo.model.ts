export interface Todo {
      id : string ; 
      content : string ; 
      status : TodoStatus
}

export enum TodoStatus {
      PENDING , 
      IN_PROGRESS , 
      COMPLETE ,
      CANCELED 
}