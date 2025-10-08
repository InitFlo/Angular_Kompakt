import { Component, OnInit } from '@angular/core';
import type { Customer } from '../../model/customer';
import { CommonModule, JsonPipe } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";
import { ErrorBoxComponent } from "../../../../components/error-box/error-box.component";

@Component({
  selector: 'app-customer-list',
  imports: [
    // JsonPipe
    CommonModule,
    LoadingIndicatorComponent,
    ErrorBoxComponent
],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {

  public customers: Customer[] = [];
  public loading = true;
  public errorMessage: string | null = null;

  constructor(private customerService: CustomerService) { }

  // entsprcht connectedCallback 
  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loading = true;
    this.errorMessage = null;
    this.customerService.getAll()
      .subscribe({
        next: (customers) => {
          this.customers = customers;
          this.loading = false;
        },
        error: (e: Error) => {
          this.errorMessage = e.message;
          this.loading = false;
        }
      });
  }

}
