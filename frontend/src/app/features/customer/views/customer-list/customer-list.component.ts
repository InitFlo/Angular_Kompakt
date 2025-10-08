import { Component, OnInit } from '@angular/core';
import type { Customer } from '../../model/customer';
import { CommonModule, JsonPipe } from '@angular/common';
import { CustomerService } from '../../services/customer.service';
import { LoadingIndicatorComponent } from "../../../../components/loading-indicator/loading-indicator.component";

@Component({
  selector: 'app-customer-list',
  imports: [
    // JsonPipe
    CommonModule,
    LoadingIndicatorComponent
],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {
    
  public customers: Customer[] = [];
  public loading = true;

  constructor(private customerService: CustomerService){}

  // entsprcht connectedCallback 
  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers() {
    this.loading = true;
    this.customerService.getAll()
      .subscribe((customers) => {
        this.customers = customers;
        this.loading = false;
      });
  }

}
