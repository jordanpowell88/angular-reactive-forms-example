import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { validationMessages } from 'projects/validation-messages/src/public-api';

@Component({
  selector: 'shared-ui-select',
  template: `
   <mat-form-field *ngIf="control">
    <mat-label>{{ label }}</mat-label>
    <mat-select [formControl]="control">
      <mat-option *ngFor="let option of options" [value]="option">
        {{ option }}
      </mat-option>
    </mat-select>
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
export class UiSelectComponent {
  @Input() label = "";
  @Input() control!: FormControl;
  @Input() options: string[] = [];
  @Input() messages = validationMessages;
  @Input() placeholder?: string;
}
