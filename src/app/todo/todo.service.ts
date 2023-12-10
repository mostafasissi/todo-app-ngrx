import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";
import { Observable, from, of } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class TodoService {
    addTodo(todos : Todo[]){
       let todosString : string = JSON.stringify(todos);
       localStorage.setItem('todos' , todosString);
       return true;
    }
    getAllTodos() :Observable<Todo[]> {
        let todosString : string | null  = localStorage.getItem('todos');
        console.log('todos : ' , todosString);
        if(todosString != null ) return of(JSON.parse(todosString))
        else return of() ; 
        
    }
}