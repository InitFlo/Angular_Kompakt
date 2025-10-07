import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../model/customer';
import { environment } from '../../../../environments/environment.development';

const url = environment.appUrl + 'customers/';

const mock = [
  {
    id: 3,
    name: 'Tim',
    credit_limit: 299
  },
  {
    id: 4,
    name: 'Tom',
    credit_limit: 50
  }
]
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getAll(): Observable<Customer[]> {
    return of(mock);
  }
}
