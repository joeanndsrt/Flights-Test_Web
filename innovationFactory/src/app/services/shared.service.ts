import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private showComponent: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public showComponent$ = this.showComponent.asObservable();

  public setShowComponent(show: boolean) {
    this.showComponent.next(show);
  }
}
