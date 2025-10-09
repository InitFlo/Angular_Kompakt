import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { Customer } from '../../model/customer';
import { CommonModule } from '@angular/common';
import { RouterLinkActive } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-table',
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.scss'
})
export class CustomerTableComponent {

  @Output()
  deleteCustomer = new EventEmitter();

  @Input()
  public customers: Customer[] = [];


  deleteHandler(customer: Customer) {
    console.log(customer)
    this.deleteCustomer.emit(customer);
  }
}
