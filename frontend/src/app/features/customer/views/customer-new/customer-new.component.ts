import { Component } from '@angular/core';
import { CustomerFormComponent } from "../../components/customer-form/customer-form.component";

@Component({
  selector: 'app-customer-new',
  imports: [CustomerFormComponent],
  templateUrl: './customer-new.component.html',
  styleUrl: './customer-new.component.scss'
})
export class CustomerNewComponent {

}
