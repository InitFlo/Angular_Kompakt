import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/actions/auth.actions';
import { LoginData } from '../model/login-data';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  store = inject(Store);
  fields = inject(FormBuilder).group({
    email: [
      'tim@example.com'
    ],
    password: [
      '20q934wtaefijo'
    ]
  })

  submitHandler() {
    console.log(this.fields.value);
    this.store.dispatch(AuthActions.login({
      data: this.fields.value as LoginData
    }))
  }

}
