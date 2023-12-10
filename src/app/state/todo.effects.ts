import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { addTodoAction, failureLoadingTodosAction, loadTodosAction, removeTodoAction, successLoadingTodosAction } from "./todo.actions";
import {catchError, exhaustMap, map, of, switchMap, withLatestFrom } from "rxjs";
import { TodoService } from "../todo/todo.service";
import { AppState } from "./app.state";
import { Store } from "@ngrx/store";
import { selectTodos } from "./todo.selectors";
@Injectable()
export class TodoEffects {

    constructor(
        private actions$ : Actions , 
        private todoService  :  TodoService,
        private store : Store<AppState>
        ) {}
    
    saveTodo$ = createEffect(
        ()=> this.actions$.pipe(
            ofType(addTodoAction , removeTodoAction),
            withLatestFrom(this.store.select(selectTodos)),
            switchMap(([action , todos])=> {
                console.log("[save Todo effects]")
                return of(this.todoService.addTodo(todos))
            })        
        ),
        {dispatch : false}
    )

    loadTodos$ = createEffect(
        ()=> this.actions$.pipe(
            ofType(loadTodosAction),
            exhaustMap(()=> this.todoService.getAllTodos().pipe(
                map((result : any) => successLoadingTodosAction(result)),
                catchError(error => of(failureLoadingTodosAction({error})))// IF the todo are failed to load
            ))
        )
    )

}