import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AddressForm, AddressFormGroup } from "./address-form/address-form";
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
            firstName: new FormControl(model.firstName),
            lastName: new FormControl(model.lastName),
            address: new AddressForm(model.address)
        }).controls)
    }
}