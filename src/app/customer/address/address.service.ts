import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker'
import { Address, USStates } from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  address(): Address {
    return {
      addressLine1: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.stateAbbr() as USStates,
      zip: faker.address.zipCode()
    }
  }
}
