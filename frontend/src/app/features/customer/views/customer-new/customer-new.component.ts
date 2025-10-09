import { Component } from '@angular/core';
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-new',
  imports: [CustomerFormComponent],
  templateUrl: './customer-new.component.html',
  styleUrl: './customer-new.component.scss'
})
export class CustomerNewComponent {

  createCustomer(customer: Partial<Customer>) {
    console.log(customer);
  }

}
