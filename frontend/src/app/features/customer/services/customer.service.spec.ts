import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';

describe('CustomerService', () => {
  let service: CustomerService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(CustomerService);
    httpTesting = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getAll', () => {
    it('should exist', () => {
      expect(service.getAll).toBeTruthy();
    })

    it('should call get', async () => {
      // $ bedeutet Observable
      const customers$ = service.getAll();
      const customersPromise = firstValueFrom(customers$);

      const url = 'http://localhost:3001/customers/'

      // Der Aufruf, wie er ausgesehen hätte
      const req = httpTesting.expectOne(url);
      expect(req.request.method).toBe('GET');

      // mock-Daten 
      req.flush([]);

      expect(await customersPromise).toEqual([])

      httpTesting.verify();

    })

    it('should call delete', async () => {
      // $ bedeutet Observable
      const deleteId = 1;

      service.deleteById(deleteId).subscribe();

      const url = 'http://localhost:3001/customers/' + deleteId;

      // Der Aufruf, wie er ausgesehen hätte
      const req = httpTesting.expectOne(url);
      expect(req.request.method).toBe('DELETE');

      // mock-Daten 
      req.flush({});
      httpTesting.verify();

    })
  })
});
