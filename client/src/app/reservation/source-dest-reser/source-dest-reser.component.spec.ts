import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceDestReserComponent } from './source-dest-reser.component';

describe('SourceDestReserComponent', () => {
  let component: SourceDestReserComponent;
  let fixture: ComponentFixture<SourceDestReserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceDestReserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceDestReserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
