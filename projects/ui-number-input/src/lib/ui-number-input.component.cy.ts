import { FormControl, Validators } from "@angular/forms"
import { UiNumberInputComponent } from "./ui-number-input.component"
import { UiNumberInputModule } from "./ui-number-input.module"

describe('SharedNumberInputComponent', () => {
    it('can mount', () => {
        cy.mount(UiNumberInputComponent, {
            imports: [UiNumberInputModule],
            componentProperties: {
                label: 'Favorite Number',
                control: new FormControl(5),
            }
        })

        cy.get('input').should('contain.value', 5)
    })

    it('does not display text', () => {
        cy.mount(UiNumberInputComponent, {
            imports: [UiNumberInputModule],
            componentProperties: {
                label: 'Favorite Number',
                control: new FormControl('a'),
            }
        })
        cy.get('input').should('not.contain.value', 'a')
    })
})