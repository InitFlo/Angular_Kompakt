import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditComponent } from './customer-edit.component';
import { CustomerService } from '../../services/customer.service';
import { createCustomerServiceMock } from '../../../../../../testdata/mocks/services/customer.service.mock';
import { provideRouter } from '@angular/router';

describe('CustomerEditComponent', () => {
  let component: CustomerEditComponent;
  let fixture: ComponentFixture<CustomerEditComponent>;
  let customerServiceMock: Partial<CustomerService>;

  beforeEach(async () => {
    customerServiceMock = createCustomerServiceMock();
    await TestBed.configureTestingModule({
      imports: [CustomerEditComponent],
      providers: [
        provideRouter([]),
        {
          provide: CustomerService,
          useValue: customerServiceMock
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
