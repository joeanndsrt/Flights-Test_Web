import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';
import { IUser } from '../../interfaces/user';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  inputEmail: string = '';
  inputPassword: string = '';
  remember: boolean = false;
  @Output() error = new EventEmitter<any>();
  @Output() verify: EventEmitter<boolean> = new EventEmitter<boolean>();

  user: IUser = {
    email: '',
    password: '',
  };

  constructor(private userService: UserService, private sharedService: SharedService) {}

  showErrorDialog() {
    const message = {
      severity: 'error',
      summary: 'Incorrect Credentials',
      detail: 'The username or password you entered is incorrect.',
      life: 2000,
    };

    this.error.emit(message);
  }

  showRegisterComponent() {
    this.sharedService.setShowComponent(false);
  }

  onSubmit(): void {
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    if (!emailInput.checkValidity()) {
      emailInput.classList.add('error-input');
    } else {
      emailInput.classList.remove('error-input');
    }

    if (!passwordInput.checkValidity()) {
      passwordInput.classList.add('error-input');
    } else {
      passwordInput.classList.remove('error-input');
    }

    if (emailInput.checkValidity() && passwordInput.checkValidity()) {
      this.user.email = this.inputEmail;
      this.user.password = this.inputPassword;

      this.userService.login(this.user).subscribe(
        (result) => {
          if (result.status === true) {
            localStorage.setItem('user_id', result.data.user_id);
            this.verify.emit(true);
          } else {
            this.showErrorDialog();
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
