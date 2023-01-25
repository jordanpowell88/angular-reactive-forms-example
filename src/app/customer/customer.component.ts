import { Component } from '@angular/core';
import { CustomerForm } from './customer-form';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customerForm: CustomerForm = new CustomerForm(this.customerService.customer())

  constructor(private readonly customerService: CustomerService) {}
}
