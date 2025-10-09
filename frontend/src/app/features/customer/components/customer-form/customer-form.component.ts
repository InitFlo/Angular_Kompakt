import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Customer } from '../../model/customer';

@Component({
  selector: 'app-customer-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent implements OnInit {

  @Input()
  public formData?: Customer;

  @Output()
  public customerSubmit = new EventEmitter();

  public fields = inject(FormBuilder).group({
    name: [
      '',
      [
        Validators.required,
        Validators.minLength(2)
      ]
    ],
    credit_limit: [
      0,
      [
        Validators.required,
        Validators.min(0)
      ]
    ]
  });

  ngOnInit(): void {
    if (this.formData) {
      this.fields.patchValue(this.formData);
    }
  }

  formHandler() {
    const customer = this.fields.value;
    console.log(customer);
    this.customerSubmit.emit(customer);
  }
}
