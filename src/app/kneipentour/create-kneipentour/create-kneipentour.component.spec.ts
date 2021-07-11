import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKneipentourComponent } from './create-kneipentour.component';

describe('CreateKneipentourComponent', () => {
  let component: CreateKneipentourComponent;
  let fixture: ComponentFixture<CreateKneipentourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateKneipentourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKneipentourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
