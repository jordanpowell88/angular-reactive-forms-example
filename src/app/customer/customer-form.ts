import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { filter, take, tap } from "rxjs";
import { AddressForm, AddressFormGroup } from "./address/address-form";
import { Customer } from "./customer";

interface CustomerFormGroup {
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    address: FormGroup<AddressFormGroup>
}

export class CustomerForm extends FormGroup<CustomerFormGroup> {

    get Address(): AddressForm {
        return this.controls.address as AddressForm
    }

    constructor(readonly model: Customer, readonly fb: FormBuilder = new FormBuilder()) {
        super(fb.group({
            firstName: new FormControl(model.firstName, Validators.required),
            lastName: new FormControl(model.lastName, [Validators.required, Validators.maxLength(30)]),
            address: new AddressForm(model.address)
        }).controls)
    }
}