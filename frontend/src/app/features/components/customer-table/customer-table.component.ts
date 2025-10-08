import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Customer } from '../../customer/model/customer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-table',
  imports: [CommonModule],
  templateUrl: './customer-table.component.html',
  styleUrl: './customer-table.component.scss'
})
export class CustomerTableComponent {
  @Input()
  public customers: Customer[] = []

  @Output()
  deleteCustomer = new EventEmitter();


  deleteHandler(customer: Customer) {
    console.log(customer);
    this.deleteCustomer.emit(customer);
  }
}
