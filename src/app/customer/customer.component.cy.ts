import { AppModule } from '../app.module'
import { CustomerComponent } from './customer.component'

describe('CustomerComponent', () => {
    it('can mount', () => {
        cy.mount(CustomerComponent, {
            imports: [AppModule],
        })
    })
})