import { Component, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [MessageService],
})
export class UserComponent {
  show = false;
  isVerified: boolean = false;

  constructor(
    private messageService: MessageService,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    this.sharedService.showComponent$.subscribe((showComponent) => {
      this.show = showComponent;
    });
  }

  handleLoginError(message: any) {
    this.messageService.add(message);
  }

  handleVerification(verify: boolean) {
    this.isVerified = verify;

  }


}
