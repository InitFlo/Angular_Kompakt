import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  formHandler() {
    const customer = this.fields.value;
    console.log(customer);
  }

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
}
