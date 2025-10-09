import { Component } from '@angular/core';
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";

@Component({
  selector: 'app-customer-edit',
  imports: [CustomerFormComponent],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.scss'
})
export class CustomerEditComponent {

}
