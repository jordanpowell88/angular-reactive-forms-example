import { TestBed } from '@angular/core/testing';

import { UiNumberInputService } from './ui-number-input.service';

describe('UiNumberInputService', () => {
  let service: UiNumberInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiNumberInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
