import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ValidationMessagesModules } from 'projects/validation-messages/src/public-api';
import { UiNumberInputComponent } from './ui-number-input.component';



@NgModule({
  declarations: [
    UiNumberInputComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ValidationMessagesModules
  ],
  exports: [
    UiNumberInputComponent
  ]
})
export class UiNumberInputModule { }
