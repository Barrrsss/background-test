import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';
import { FieldBuilderComponent } from './field-builder/field-builder.component';
import { TextBoxComponent } from './elements/testInput/testInput';
import { DropDownComponent } from './elements/testSelect/testSelect';
import { CheckBoxComponent } from './elements/testCheckbox/testCheckbox';
import { TextNumberComponent } from './elements/testNumber/testNumber';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DynamicFormBuilderComponent,
    FieldBuilderComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    TextNumberComponent,
  ],
  exports: [DynamicFormBuilderComponent],
  providers: []
})
export class DynamicFormBuilderModule { }
