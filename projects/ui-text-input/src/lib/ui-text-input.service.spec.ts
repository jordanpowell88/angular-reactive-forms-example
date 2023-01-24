import { TestBed } from '@angular/core/testing';

import { UiTextInputService } from './ui-text-input.service';

describe('UiTextInputService', () => {
  let service: UiTextInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiTextInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
