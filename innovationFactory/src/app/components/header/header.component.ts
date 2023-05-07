import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSelectionListChange } from '@angular/material/list';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public router: Router;
  @Output() showLogin: EventEmitter<boolean> = new EventEmitter<boolean>();
  showComponent = false;
  hasUser: boolean = false;

  toggleLogin(){
    this.showLogin.emit(true);
  }

  constructor(router: Router, private sharedService: SharedService) { 
    this.router = router;
  }

  ngOnInit() {
    this.sharedService.showComponent$.subscribe((showComponent) => {
      this.showComponent = showComponent;
      if (localStorage.getItem('app')) {
        this.hasUser = true;
      }
    });
  }

  login(){
    this.router.navigate(['/user']);
  }

  logout(){
    localStorage.removeItem('app');
    this.hasUser = false;
    this.router.navigate(['/user']);
  }

  toggleComponentLogin(){
    this.sharedService.setShowComponent(true);
  }

  toggleComponentRegister(){
    this.sharedService.setShowComponent(false);
  }

  scrollToSection(section: string): void {
    const element = document.getElementById(section);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
