import { Component } from '@angular/core';

@Component({
  selector: 'component-login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  text: string;

  constructor() {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }

}
