import { Component } from '@angular/core';

@Component({
  selector: 'app-flights-tab',
  templateUrl: './flights-tab.component.html',
  styleUrls: ['./flights-tab.component.css'],
})
export class FlightsTabComponent {
  numAdults = 1;
  numChildren = 0;

  increment(passengerType: string) {
    if (passengerType === 'adult') {
      this.numAdults++;
    } else if (passengerType === 'child') {
      this.numChildren++;
    }
  }

  decrement(passengerType: string) {
    if (passengerType === 'adult' && this.numAdults > 1) {
      this.numAdults--;
    } else if (passengerType === 'child' && this.numChildren > 0) {
      this.numChildren--;
    }
  }

  public cities = [
    { name: 'Dubai (DXB)', code: 'DXB' },
    { name: 'Abu Dhabi (AUH)', code: 'AUH' },
    { name: 'London (LHR)', code: 'LHR' },
    { name: 'Paris (CDG)', code: 'CDG' },
    { name: 'New York (JFK)', code: 'JFK' },
    { name: 'Los Angeles (LAX)', code: 'LAX' },
    { name: 'Sydney (SYD)', code: 'SYD' },
    { name: 'Tokyo (NRT)', code: 'NRT' },
    { name: 'Hong Kong (HKG)', code: 'HKG' },
  ];

  public selectedCity = '';

  public selectCity(city: string): void {
    this.selectedCity = city;
  }
}
