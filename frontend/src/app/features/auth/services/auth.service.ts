import { Injectable } from '@angular/core';
import { LoginData } from '../model/login-data';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(data: LoginData) {
    console.log(data);
    return of({
      id: 34,
      name: 'Tim'
    }).pipe(delay(1000));
  }
}
