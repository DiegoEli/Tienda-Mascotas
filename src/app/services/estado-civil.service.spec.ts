import { TestBed } from '@angular/core/testing';

import { EstadoCivilService } from './estado-civil.service';

describe('EstadoCivilService', () => {
  let service: EstadoCivilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoCivilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
