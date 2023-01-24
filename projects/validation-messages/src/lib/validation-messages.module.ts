import { NgModule } from "@angular/core";
import { ErrorMessagesPipe } from './error-messages.pipe'

@NgModule({
    declarations: [ErrorMessagesPipe],
    exports: [ErrorMessagesPipe]
})
export class ValidationMessagesModules {}