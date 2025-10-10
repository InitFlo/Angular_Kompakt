import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  fields = inject(FormBuilder).group({
    email: [
      'tim@example.com'
    ],
    password: [
      '20q934wtaefijo'
    ]
  })

  submitHandler() {
    console.log(this.fields.value)
  }

}
