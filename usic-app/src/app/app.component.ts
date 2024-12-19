import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {}

  showNavBar(): boolean {
    const hiddenRoutes = ['/', '/sign-up/1', '/sign-up/2'];
    return !hiddenRoutes.includes(this.router.url);
  }
}