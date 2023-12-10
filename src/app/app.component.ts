import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/counter.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  counter = this.store.select('conterState') ; 

  constructor(private store : Store<any>){}

  HandleIncrement(){
      this.store.dispatch(increment())
  }
  handleDecrement(){
    this.store.dispatch(decrement())
  }
  handleReset(){
      this.store.dispatch(reset())

  }
}
