import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerKneipentourComponent } from './viewer-kneipentour.component';

describe('ViewerKneipentourComponent', () => {
  let component: ViewerKneipentourComponent;
  let fixture: ComponentFixture<ViewerKneipentourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewerKneipentourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewerKneipentourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
