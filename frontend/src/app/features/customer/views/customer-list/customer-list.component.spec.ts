import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { CustomerService } from '../../services/customer.service';
import { of } from 'rxjs';
import { Customer } from '../../model/customer';

const createCustomerSericeMock = function () {
   const service = {
    getAll: jest.fn(),
    deleteById: jest.fn(),
  }

  service.deleteById.mockReturnValue(of({}))
  service.getAll.mockReturnValue(of([]))

  return service;
}

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerServiceMock = createCustomerSericeMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerListComponent],
      providers: [
        {
          provide: CustomerService,
          useValue: customerServiceMock
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('loadCustomers', () => {
    it('should exist and work', () => {
      expect(component.loadCustomers).toBeTruthy();
      expect(customerServiceMock.getAll).toHaveBeenCalled();
    })
  });

  describe('deleteCustomer', () => {
    it('should exist and work', () => {
      expect(component.deleteCustomer).toBeTruthy();
      component.deleteCustomer({id: 1} as Customer)
      expect(customerServiceMock.deleteById).toHaveBeenCalled();
    })
  });
});
