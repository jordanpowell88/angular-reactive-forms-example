import { FormControl, Validators } from "@angular/forms"
import { UiTextInputComponent } from "./ui-text-input.component"
import { UiTextInputModule } from "./ui-text-input.module"

describe('SharedTextInputComponent', () => {
    it('can mount', () => {
        cy.mount(UiTextInputComponent, {
            imports: [UiTextInputModule],
            componentProperties: {
                label: 'Hello World',
                control: new FormControl('Bob'),
            }
        })
    })

    it('shows required messages', () => {
        cy.mount(UiTextInputComponent, {
            imports: [UiTextInputModule],
            componentProperties: {
                label: 'Hello World',
                control: new FormControl(null, Validators.required),
            }
        })
        cy.get('mat-error').contains('Required')
    })
})