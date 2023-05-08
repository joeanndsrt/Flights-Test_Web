import { Component } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { IUserVerify } from '../../interfaces/user-verify'

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent {
  showError = false;
  showCount = true;
  errorMessage: string = '';
  otpCount: string = '';

  user: IUserVerify = {
    user_id: 0,
    otp: ''
  }

  constructor(private userService: UserService, private location: Location, private router: Router) { }
  
    onOtpChange(event: string){
      const userId = localStorage.getItem('user_id');
      const id: number = userId !== null ? parseInt(userId) : 0;

      if(event.length == 6){
        this.user.user_id = id;
        this.user.otp = event;
        this.showCount = false;

        this.userService.verify(this.user).subscribe((result) => {
          if(result.status == true){
            localStorage.setItem('token', result.data.token);
            this.router.navigate(['/']).then(() => {
              this.location.replaceState('/');
              window.location.reload();
            });
          }
          else{
            this.showError = true;
            this.errorMessage = result.message;
          }
        }, (error) => {
          this.showError = true;
          this.errorMessage = error;
        })
      } else {
        this.showError = false;
        this.showCount = true;
        this.otpCount = 6 - event.length + " left!"
      }

    }  
}
