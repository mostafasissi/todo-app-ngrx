import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="container-fluid text-light">
  <div class="row">
    <div class="col-6 d-flex align-items-center">
      <h6 class="mb-0">Todo App</h6>
    </div>
    <div class="col-6 d-flex justify-content-end ">
      <a href="#" class="btn btn-light m-2">Sign In</a>
    </div>
  </div>
</header>

  ` ,
  styles: [`
  .container-fluid {
    padding: 0;
  }
  .container-fluid {
    background-color : blue ; 
  }

  `]
})
export class HeaderComponent {

}
