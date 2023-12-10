import { createReducer, on } from "@ngrx/store";
import { addTodoAction, loadTodosAction, removeTodoAction, successLoadingTodosAction } from "./todo.actions";
import { state } from "@angular/animations";
import { AppState } from "./app.state";
import { Todo, TodoStatus } from "../todo/todo.model";

export const initialState : AppState = {
    todos : new Array<Todo>()
}

export const todoReducer =  createReducer(
    initialState , 
    on(addTodoAction , (state : AppState , {content}) => {
        return {...state ,
             todos:[...state.todos , 
                {
                    id : Date.now().toLocaleString(),
                    content : content , 
                    status : TodoStatus.PENDING
                 } ]}
    }),
    on(removeTodoAction , (state ,{id} )=> {
        return {
            todos : state.todos.filter(todo => todo.id != id)
         }
    }),
    on(successLoadingTodosAction , (state , {todos} )=>{
        // console.log('[Todo] loading todos sucessufly')
        console.log("in successLoadingTodosAction : " , todos)
        return {todos}
    }) 
)