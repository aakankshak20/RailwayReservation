import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelreservationComponent } from './cancelreservation.component';

describe('CancelreservationComponent', () => {
  let component: CancelreservationComponent;
  let fixture: ComponentFixture<CancelreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelreservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
