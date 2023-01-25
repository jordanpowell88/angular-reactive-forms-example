import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { validationMessages } from 'projects/validation-messages/src/public-api';

@Component({
  selector: 'shared-ui-text',
  template: `
    <mat-form-field *ngIf="control">
    <mat-label>{{ label }}</mat-label>
    <input type="text" matInput [formControl]="control" />
    <div *ngIf="control.errors">
      {{ control.errors }}
      <mat-error *ngFor="let error of control.errors | errorKeys">
        {{ messages[error] }}
      </mat-error>
    </div>
  </mat-form-field>
  `,
  styles: [
    `
    mat-form-field {
      width: 100%;
    }
    `
  ]
})
export class UiTextInputComponent {
  @Input() label = "";
  @Input() control!: FormControl;
  @Input() placeholder?: string;
  @Input() messages = validationMessages;
}
