import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectKneipenlisteComponent } from './select-kneipenliste.component';

describe('SelectKneipenlisteComponent', () => {
  let component: SelectKneipenlisteComponent;
  let fixture: ComponentFixture<SelectKneipenlisteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectKneipenlisteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectKneipenlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
