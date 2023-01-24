import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNumberInputComponent } from './ui-number-input.component';

describe('UiNumberInputComponent', () => {
  let component: UiNumberInputComponent;
  let fixture: ComponentFixture<UiNumberInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiNumberInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiNumberInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
