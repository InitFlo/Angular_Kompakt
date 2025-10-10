import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/actions/auth.actions';
import { LoginData } from '../model/login-data';
import { selectLoading } from '../store/selectors/auth.selectors';
import { AsyncPipe } from '@angular/common';
import { LoadingIndicatorComponent } from "../../../components/loading-indicator/loading-indicator.component";

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule,
    AsyncPipe,
    LoadingIndicatorComponent
],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  store = inject(Store);

loading$ = this.store.select(selectLoading);

  fields = inject(FormBuilder).nonNullable.group({
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
