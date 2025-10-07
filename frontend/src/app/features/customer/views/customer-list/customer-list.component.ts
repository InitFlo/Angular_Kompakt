import { Component } from '@angular/core';
import type { Customer } from '../../model/customer';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  imports: [
   // JsonPipe
   CommonModule
  ],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent {
    
  public customers: Customer[] = [
    {
      id: 3,
      name : 'Tim',
      credit_limit: 300
    },
    {
      id: 4,
      name: 'Tom',
      credit_limit: 50
    }
  ]
}
