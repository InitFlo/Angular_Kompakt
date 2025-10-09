import { Component, inject } from '@angular/core';
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";
import { Customer } from '../../model/customer';
import { CustomerService } from '../../services/customer.service';
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-new',
  imports: [CustomerFormComponent, ErrorBoxComponent, LoadingIndicatorComponent],
  templateUrl: './customer-new.component.html',
  styleUrl: './customer-new.component.scss'
})
export class CustomerNewComponent {

  constructor(private customerService: CustomerService) {

  }

  public saving = false;
  public errorMessage: string | null = null;
  #router = inject(Router);

  createCustomer(customer: Partial<Customer>) {
    this.saving = true;
    this.errorMessage = null;
    this.customerService.postOne(customer)
      .subscribe({
        next: (customer) => {
          console.log("Neu angelegt: " + customer);
          this.saving = false;
          this.#router.navigate(['/customers'])
        },
        error: (e: Error) => {
          this.saving = false;
          this.errorMessage = e.message;
        }
      })
  }

}
