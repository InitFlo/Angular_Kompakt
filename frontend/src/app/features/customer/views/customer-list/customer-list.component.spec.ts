import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { CustomerService } from '../../services/customer.service';
import { of } from 'rxjs';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerListComponent],
      providers: [
        {
          provide: CustomerService,
          useValue: {
            getAll: () => {
              return of([]);
            }
          }
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
});
