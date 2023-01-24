import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { validationMessages } from 'projects/validation-messages/src/public-api';

@Component({
  selector: 'shared-ui-number',
  template: `
    <mat-form-field *ngIf="control">
      <mat-label>{{ label }}</mat-label>
      <input type="number" matInput [formControl]="control" />
      <ng-template *ngIf="control.errors">
        <mat-error *ngFor="let error of control.errors | errorKeys">
          {{ messages[error] }}
        </mat-error>
      </ng-template>
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
export class UiNumberInputComponent {
  @Input() label = "";
  @Input() control!: FormControl;
  @Input() placeholder?: string;
  @Input() messages = validationMessages;
}
