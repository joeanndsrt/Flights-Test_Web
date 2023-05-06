import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicColumnComponent } from './pic-column.component';

describe('PicColumnComponent', () => {
  let component: PicColumnComponent;
  let fixture: ComponentFixture<PicColumnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PicColumnComponent]
    });
    fixture = TestBed.createComponent(PicColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
