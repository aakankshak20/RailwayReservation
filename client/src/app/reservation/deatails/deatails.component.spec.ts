import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatailsComponent } from './deatails.component';

describe('DeatailsComponent', () => {
  let component: DeatailsComponent;
  let fixture: ComponentFixture<DeatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
