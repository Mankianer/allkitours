import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnKneipentourenComponent } from './own-kneipentouren.component';

describe('OwnKneipentourenComponent', () => {
  let component: OwnKneipentourenComponent;
  let fixture: ComponentFixture<OwnKneipentourenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnKneipentourenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnKneipentourenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
