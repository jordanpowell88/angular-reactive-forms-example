import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UiTextInputComponent } from './ui-text-input.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { CommonModule } from '@angular/common';
import { ValidationMessagesModules } from 'projects/validation-messages/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    UiTextInputComponent
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
    UiTextInputComponent
  ]
})
export class UiTextInputModule { }
