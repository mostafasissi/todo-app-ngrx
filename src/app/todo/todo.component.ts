import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs'
import { addTodoAction, loadTodosAction, removeTodoAction } from '../state/todo.actions';
import { AppState } from '../state/app.state';
import { selectTodos } from '../state/todo.selectors';
import { Todo } from './todo.model';
@Component({
   selector: 'app-todo',
   templateUrl: './todo.component.html',
   styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
   @ViewChild("input") inputRef !: ElementRef;

   allTodos$: Observable<Todo[]> = this.store.select(selectTodos).pipe(map((res : any)=>res.todos));

   constructor(private store: Store<AppState>) { }

   ngOnInit() {
     this.store.dispatch(loadTodosAction())
   }

   addTodo() {
      this.store.dispatch(addTodoAction({ content: this.inputRef.nativeElement.value }))
      this.inputRef.nativeElement.value = '';
   }
   removeTodo(id: string) {
      this.store.dispatch(removeTodoAction({ id }))
   }

}
