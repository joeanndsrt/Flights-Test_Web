import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public router: Router;

  constructor(router: Router) { 
    this.router = router;
  }

  login(){
    this.router.navigate(['/login']);
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
