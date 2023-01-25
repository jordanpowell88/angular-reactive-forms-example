import { Component, Input } from '@angular/core';
import { AddressForm } from './address-form';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent {
  @Input() addressForm!: AddressForm
}
