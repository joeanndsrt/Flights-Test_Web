import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsTabComponent } from './flights-tab.component';

describe('FlightsTabComponent', () => {
  let component: FlightsTabComponent;
  let fixture: ComponentFixture<FlightsTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightsTabComponent]
    });
    fixture = TestBed.createComponent(FlightsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
