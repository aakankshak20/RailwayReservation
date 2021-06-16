import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewresComponent } from './viewres.component';

describe('ViewresComponent', () => {
  let component: ViewresComponent;
  let fixture: ComponentFixture<ViewresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
