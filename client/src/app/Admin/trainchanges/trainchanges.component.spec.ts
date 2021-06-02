import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainchangesComponent } from './trainchanges.component';

describe('TrainchangesComponent', () => {
  let component: TrainchangesComponent;
  let fixture: ComponentFixture<TrainchangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainchangesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainchangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
