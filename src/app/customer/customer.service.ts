import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customer(): Customer {
    return {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    }
  }
}
