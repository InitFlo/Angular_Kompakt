import { Component, OnInit } from '@angular/core';
import type { Customer } from '../../model/customer';
import { CommonModule, JsonPipe } from '@angular/common';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  imports: [
    // JsonPipe
    CommonModule
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit {

  public customers: Customer[] = []

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe((customers) => {
      console.log(customers);
      this.customers = customers;
    })
  }


}
