import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourstepperComponent } from './tourstepper.component';

describe('TourstepperComponent', () => {
  let component: TourstepperComponent;
  let fixture: ComponentFixture<TourstepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourstepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourstepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
