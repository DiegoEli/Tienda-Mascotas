import { TestBed } from '@angular/core/testing';

import { TipoPagoService } from './tipo-pago.service';

describe('TipoPagoService', () => {
  let service: TipoPagoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoPagoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
