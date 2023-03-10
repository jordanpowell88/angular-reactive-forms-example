import { FormBuilder, FormControl, FormGroup } from "@angular/forms"
import { Address, USStates } from './address'

export interface AddressFormGroup {
    addressLine1: FormControl<string | null>
    city: FormControl<string | null>
    state: FormControl<string | null>
    zip: FormControl<string | null>
}

export class AddressForm extends FormGroup<AddressFormGroup> {
    constructor(readonly model: Address, fb: FormBuilder = new FormBuilder()) {
        super(fb.group({
            addressLine1: new FormControl(model.addressLine1),
            city: new FormControl(model.city),
            state: new FormControl(model.state),
            zip: new FormControl(model.zip)
        }).controls)
    }

    usStates: USStates[] = [
        "AL",
        "AK",
        "AS",
        "AZ",
        "AR",
        "CA",
        "CO",
        "CT",
        "DE",
        "DC",
        "FM",
        "FL",
        "GA",
        "GU",
        "HI",
        "ID",
        "IL",
        "IN",
        "IA",
        "KS",
        "KY",
        "LA",
        "ME",
        "MH",
        "MD",
        "MA",
        "MI",
        "MN",
        "MS",
        "MO",
        "MT",
        "NE",
        "NV",
        "NH",
        "NJ",
        "NM",
        "NY",
        "NC",
        "ND",
        "MP",
        "OH",
        "OK",
        "OR",
        "PW",
        "PA",
        "PR",
        "RI",
        "SC",
        "SD",
        "TN",
        "TX",
        "UT",
        "VT",
        "VI",
        "VA",
        "WA",
        "WV",
        "WI",
        "WY",
        ];
}