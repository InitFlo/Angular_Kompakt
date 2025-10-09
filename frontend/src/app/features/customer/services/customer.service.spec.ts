import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { firstValueFrom } from 'rxjs';
import { customersMock } from '../../../../../testdata/mocks/api/customers';

const url = 'http://localhost:3001/customers/'

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

      // Der Aufruf, wie er ausgesehen hätte
      const req = httpTesting.expectOne(url);
      expect(req.request.method).toBe('GET');

      // mock-Daten 
      req.flush(customersMock);

      expect(await customersPromise).toEqual(customersMock)

      httpTesting.verify();

    })
    describe('getAll', () => {
      it('should call delete', async () => {
        // $ bedeutet Observable
        const deleteId = customersMock[0].id;
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

  describe('should post one Customer', () => {
    it('should exists', () => {
      expect(service.postOne).toBeTruthy();
    });

    it('should post one Customer', async () => {
      const customerToPost = customersMock[0];
      const customerResponse = customerToPost;

      const customer$ = service.postOne(customerToPost);
      const customersPromise = firstValueFrom(customer$);
      const req = httpTesting.expectOne(url);
      expect(req.request.method).toBe('POST');

      req.flush(customerResponse);

      expect(await customersPromise).toEqual(customerResponse);

      httpTesting.verify();
    })
  }
  )
});
