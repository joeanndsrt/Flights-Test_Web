import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'innovationFactory';
  showLogin = true;
  showRegister = false;

  constructor(private router: Router) { }
  
  isHomeRoute(): boolean {
    return this.router.url === '/' || this.router.url === '/home';
  }

}
