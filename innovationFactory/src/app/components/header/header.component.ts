import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSelectionListChange } from '@angular/material/list';
import { SharedService } from '../../services/shared.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public router: Router;
  showComponent = false;
  hasUser: boolean = false;

  constructor(router: Router, private sharedService: SharedService, private userService: UserService) { 
    this.router = router;
  }

  ngOnInit() {
    this.sharedService.showComponent$.subscribe((showComponent) => {
      this.showComponent = showComponent;
      if (localStorage.getItem('token')) {
        this.hasUser = true;
      }
    });
  }

  login(){
    this.router.navigate(['/user']);
  }

  logout(){
    const token = localStorage.getItem('token');

    if (token != null) {
      this.userService.logout(token).subscribe((result) => {
        console.log(result);
      }, (error) => {
        console.log(error);
      })

      localStorage.removeItem('token');
      this.hasUser = false;
      this.router.navigate(['/user']);
    }
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
