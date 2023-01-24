import { Component } from '@angular/core';
import { AddressService } from './address-form/address.service';
import { AddressForm } from './address-form/angular-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private readonly addressService: AddressService) {}

  address = new AddressForm(this.addressService.address())
}
