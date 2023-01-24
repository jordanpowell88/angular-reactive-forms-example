import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ValidationMessagesModules } from 'projects/validation-messages/src/public-api';
import { UiSelectComponent } from './ui-select.component';



@NgModule({
  declarations: [
    UiSelectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ValidationMessagesModules
  ],
  exports: [
    UiSelectComponent
  ]
})
export class UiSelectModule { }
