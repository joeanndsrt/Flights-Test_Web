import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesCarouselComponent } from './packages-carousel.component';

describe('PackagesCarouselComponent', () => {
  let component: PackagesCarouselComponent;
  let fixture: ComponentFixture<PackagesCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PackagesCarouselComponent]
    });
    fixture = TestBed.createComponent(PackagesCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
