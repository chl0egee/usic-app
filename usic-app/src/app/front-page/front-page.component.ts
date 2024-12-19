import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.scss'
})
export class FrontPageComponent {

  logInClicked: boolean = false;
  handleLogIn() {
    //validation logic from backend 
    this.logInClicked = true; 
    console.log("entered login")
  }
}
  
