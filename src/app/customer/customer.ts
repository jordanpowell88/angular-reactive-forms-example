import { Address } from "./address/address";

export interface Customer {
    firstName: string;
    lastName: string;
    address: Address;
}