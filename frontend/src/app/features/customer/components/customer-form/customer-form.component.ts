import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {

  @Output()
  public customerSubmit = new EventEmitter();

  fields = inject(FormBuilder).group({
    name: ['',
      [
        Validators.required,
        Validators.minLength(2)
      ]
    ],
    credit_limit: [0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ]
  })

  formHandler() {
    const customer = this.fields.value;
    console.log(customer);
    this.customerSubmit.emit(customer);
  }
}
