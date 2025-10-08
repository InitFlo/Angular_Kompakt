import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTableComponent } from './customer-table.component';
import { Customer } from '../../model/customer';

// Suite
describe('CustomerTableComponent', () => {
  let component: CustomerTableComponent;
  let fixture: ComponentFixture<CustomerTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerTableComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('deleteHandler', () => {
    it('should exist', () => {
      expect(component.deleteCustomer).toBeTruthy();

      const emitSpy = jest.spyOn(component.deleteCustomer, 'emit');
      component.deleteHandler({} as Customer)
      expect(emitSpy).toHaveBeenCalled();
    })
  })
});
