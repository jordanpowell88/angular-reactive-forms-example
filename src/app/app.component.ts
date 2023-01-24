import { Component } from '@angular/core';
import { AddressForm } from './address-form/angular-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  address = new AddressForm({
    addressLine1: '',
    city: '',
    state: 'OH',
    zip: '12345'
  })
}
