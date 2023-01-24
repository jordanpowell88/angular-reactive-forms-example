import { AddressFormComponent } from "./address-form.component";
import { AddressForm } from "./angular-form";
import { faker } from '@faker-js/faker'
import { Address, USStates } from "./address";
import { AppModule } from "../app.module";

const address: Address = {
    addressLine1: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.stateAbbr() as USStates,
    zip: faker.address.zipCode()
}

describe('AddressFormComponent', () => {
    it('can mount', () => {
        cy.mount(AddressFormComponent, {
            imports: [AppModule],
            componentProperties: {
                addressForm: new AddressForm(address)
            }
        })
    })
})