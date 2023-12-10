import { createAction, props } from "@ngrx/store";
import { Todo } from "../todo/todo.model";

export const addTodoAction  = createAction(
    '[Todo] add Todo' , 
    props<{content : string}>()
)
export const loadTodosAction =  createAction(
    '[Todo] load Todos'
)
export const removeTodoAction = createAction(
    '[Todo] remove Todo',
    props<{id : string}>()
)
export const successLoadingTodosAction = createAction(
    '[Todo] loading todos sucessufly' ,
    props<{todos : Todo[]}>()
)
export const failureLoadingTodosAction = createAction(
    '[Todo] failing to load todos ' ,
    props<{error : string}>()
)