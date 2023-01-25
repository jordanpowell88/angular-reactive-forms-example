import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressFormComponent } from './customer/address-form/address-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiSelectModule } from 'projects/ui-select/src/public-api';
import { UiTextInputModule } from 'projects/ui-text-input/src/public-api';
import { UiNumberInputModule } from 'projects/ui-number-input/src/public-api';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressFormComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    UiSelectModule,
    UiTextInputModule,
    UiNumberInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
