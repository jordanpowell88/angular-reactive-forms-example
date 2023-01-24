import { Component, Input } from '@angular/core';
import { AddressForm } from './angular-form';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.css']
})
export class AddressFormComponent {
  @Input() addressForm!: AddressForm
}
