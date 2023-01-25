import { FormControl, Validators } from "@angular/forms"
import { UiSelectComponent } from "./ui-select.component"
import { UiSelectModule } from "./ui-select.module"

describe('SharedSelectComponent', () => {
    it('can mount', () => {
        cy.mount(UiSelectComponent, {
            imports: [UiSelectModule],
            componentProperties: {
                label: 'Favorite Framework',
                control: new FormControl('Angular', Validators.required),
                options: ['Angular', 'React', 'Vue']
            }
        })
    })

    it('can select different value', () => {
        cy.mount(UiSelectComponent, {
            imports: [UiSelectModule],
            componentProperties: {
                label: 'Favorite Framework',
                control: new FormControl('React', Validators.required),
                options: ['Angular', 'React', 'Vue']
            }
        })
        cy.get('mat-select').click()
        cy.get('mat-option').contains('Angular').click()
    })
})