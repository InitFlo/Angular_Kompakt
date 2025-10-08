import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import type { Customer } from '../model/customer';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const url = environment.apiUrl + 'customers/';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  #http = inject(HttpClient);

  // constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.#http.get<Customer[]>(url);
  }

  deleteById(id: number) {
    return this.#http.delete(url + id);
  }
}
