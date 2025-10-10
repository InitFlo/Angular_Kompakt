import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { CustomerService } from '../../services/customer.service';
import { throwError } from 'rxjs';
import { Customer } from '../../model/customer';
import { provideRouter } from '@angular/router';
import { createCustomerServiceMock } from '../../../../../../testdata/mocks/services/customer.service.mock';


describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  let customerServiceMock: Partial<CustomerService>;

  beforeEach(async () => {
    customerServiceMock = createCustomerServiceMock();
    await TestBed.configureTestingModule({
      imports: [CustomerListComponent],
      providers: [
        provideRouter([]),
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

    it('should handle Error', () => {
      const errorMessage = "Fehler";
      customerServiceMock.getAll.mockReturnValue(
        throwError(() => {
          return new Error(errorMessage)
        })
      )

      expect(component.errorMessage).toBeNull();
      component.loadCustomers();
      expect(customerServiceMock.getAll).toHaveBeenCalled();
      expect(component.errorMessage).toEqual(errorMessage);

    })
  });

  describe('deleteCustomer', () => {
    it('should exist and work', () => {
      expect(component.deleteCustomer).toBeTruthy();
      component.deleteCustomer({ id: 1 } as Customer)
      expect(customerServiceMock.deleteById).toHaveBeenCalled();
    })

    it('should handle Error', () => {
      const errorMessage = "Fehler2";
      customerServiceMock.deleteById.mockReturnValue(
        throwError(() => {
          return new Error(errorMessage)
        })
      )

      expect(component.errorMessage).toBeNull();
      component.deleteCustomer({ id: 1 } as Customer);
      expect(customerServiceMock.deleteById).toHaveBeenCalled();
      expect(component.errorMessage).toEqual(errorMessage);

    })
  });
});
