import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTextInputComponent } from './ui-text-input.component';

describe('UiTextInputComponent', () => {
  let component: UiTextInputComponent;
  let fixture: ComponentFixture<UiTextInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiTextInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiTextInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
