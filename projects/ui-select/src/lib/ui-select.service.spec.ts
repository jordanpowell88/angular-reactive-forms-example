import { TestBed } from '@angular/core/testing';

import { UiSelectService } from './ui-select.service';

describe('UiSelectService', () => {
  let service: UiSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
