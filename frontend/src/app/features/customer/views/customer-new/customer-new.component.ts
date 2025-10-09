import { Component } from '@angular/core';
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-new',
  imports: [CustomerFormComponent],
  templateUrl: './customer-new.component.html',
  styleUrl: './customer-new.component.scss'
})
export class CustomerNewComponent {

  constructor(private customerService: CustomerService) {

  }

  createCustomer(customer: Partial<Customer>) {
    this.customerService.postOne(customer)
      .subscribe({
        next: (customer) => {
          console.log("Neu angelegt: " + customer);
        }
      })
  }

}
