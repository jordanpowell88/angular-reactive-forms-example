import { faker } from "@faker-js/faker"
import { AppModule } from "src/app/app.module"
import { Address } from "./address"
import { AddressForm } from "./address-form"
import { AddressComponent } from "./address.component"

const address: Address = {
    addressLine1: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.stateAbbr(),
    zip: faker.address.zipCode()
}

describe('AddressComponent', () => {
    it('can mount', () => {
        cy.mount(AddressComponent, {
            imports: [AppModule],
            componentProperties: {
                addressForm: new AddressForm(address)
            }
        })
    })
})