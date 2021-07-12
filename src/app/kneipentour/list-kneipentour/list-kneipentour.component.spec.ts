import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListKneipentourComponent } from './list-kneipentour.component';

describe('ListKneipentourComponent', () => {
  let component: ListKneipentourComponent;
  let fixture: ComponentFixture<ListKneipentourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListKneipentourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListKneipentourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
