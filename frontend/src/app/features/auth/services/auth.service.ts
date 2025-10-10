import { Injectable } from '@angular/core';
import { LoginData } from '../model/login-data';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(data: LoginData) {
    console.log(data);
    return of({
      id: 34,
      name: 'Tim'
    });
  }
}
