import { Component, Output, EventEmitter } from '@angular/core';
import { IUserRegister } from '../../interfaces/user-register';
import { UserService } from '../../services/user.service';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  inputName: string = '';
  inputEmail: string = '';
  inputPassword: string = '';
  inputConfirmPassword: string = '';
  inputNumber: string = '';
  agree: boolean = false;

  user: IUserRegister = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
  };

  @Output() error = new EventEmitter<any>();

  constructor(private userService: UserService, private sharedService: SharedService) {}

  showLoginComponent() {
    this.sharedService.setShowComponent(true);
  }

  showErrorDialog(summary: string, detail: string, life: number){
    const message = {
      severity: 'error',
      summary: summary,
      detail: detail,
      life: life
    };
    this.error.emit(message);
  }

  showSuccessDialog(summary: string, life: number){
    const message = {
      severity: 'success',
      summary: summary,
      life: life
    };
    this.error.emit(message);
  }

  onSubmit(): void {
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const confirmPasswordInput = document.getElementById('confirm-password') as HTMLInputElement;
    const numberInput = document.getElementById('phoneNumber') as HTMLInputElement;

    if (!nameInput.checkValidity()) {
      nameInput.classList.add('error-input');
    } else {
      nameInput.classList.remove('error-input');
    }

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

    if (!confirmPasswordInput.checkValidity()) {
      confirmPasswordInput.classList.add('error-input');
    } else {
      confirmPasswordInput.classList.remove('error-input');
    }

    if (!numberInput.checkValidity()) {
      numberInput.classList.add('error-input');
    } else {
      numberInput.classList.remove('error-input');
    }

    if (!this.agree) {
     this.showErrorDialog('Agree to Terms of Service and Privacy Policy Required', '', 2000);
    } 

    if (
      nameInput.checkValidity() &&
      emailInput.checkValidity() &&
      passwordInput.checkValidity() &&
      confirmPasswordInput.checkValidity() && 
      numberInput.checkValidity() &&
      this.agree
    ) {
      if (this.inputPassword != this.inputConfirmPassword) {
        this.showErrorDialog('Invalid Password', 'Passwords do not match', 2000);
      } else {
        this.user.firstName = this.inputName.trim().split(/\s+/)[0];
        this.user.lastName = this.inputName.trim().split(/\s+/)[1];
        this.user.email = this.inputEmail;
        this.user.password = this.inputPassword;
        this.user.phone = "+971" + this.inputNumber;

        this.userService.register(this.user).subscribe(
          (result) => {
            console.log(result.message);

            if (result.message === 'The email must be a valid email address.') {
              this.showErrorDialog('Invalid Email', result.message, 2000);
            } else if(result.message === 'The email has already been taken.'){
              this.showErrorDialog('Invalid Email', result.message, 2000);
            } else if (
              result.message ===
                'The password must be at least 8 characters.' ||
              result.message ===
                'The password must contain at least one uppercase and one lowercase letter.' ||
              result.message ===
              'The password must contain at least one number.'
            ) {
              this.showErrorDialog('Invalid Password', result.message, 2000);
            } else if (result.message === 'The phone has already been taken.') {
              this.showErrorDialog('Invalid Phone Number', result.Message, 2000);
            } else{
              this.showSuccessDialog('User Successfully Registered', 2000);
              this.inputName = '';
              this.inputEmail = '';
              this.inputPassword = '';
              this.inputConfirmPassword = '';
              this.inputNumber = '';
              this.agree = false;
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  }
}
