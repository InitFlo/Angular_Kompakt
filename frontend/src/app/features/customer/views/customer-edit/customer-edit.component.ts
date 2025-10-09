import { Component, inject, OnInit } from '@angular/core';
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-edit',
  imports: [CustomerFormComponent, LoadingIndicatorComponent, ErrorBoxComponent],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.scss'
})
export class CustomerEditComponent implements OnInit {

  public saving = false;
  public errorMessage: string | null = null;
  public customer !: Customer;

  #router = inject(Router)
  id = +(inject(ActivatedRoute).snapshot.paramMap.get('customerId') as string);

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.loadOneCustomer();
  }

  loadOneCustomer() {
    console.log(this.id, typeof this.id)

    this.saving = true;
    this.errorMessage = null;

    this.customerService.getById(this.id)
      .subscribe({
        next: (customer) => {
          console.log(customer)
          this.customer = customer;
          this.saving = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.saving = false;
        }
      });
  }
}
