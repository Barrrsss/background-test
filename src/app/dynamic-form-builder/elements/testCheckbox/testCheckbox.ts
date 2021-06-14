import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'checkbox',
    templateUrl: './testCheckbox.html',
    styleUrls: ['./testCheckbox.scss']
})
export class CheckBoxComponent {

    @Input() field:any = {};
    @Input() form!:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; };
    get isDirty() { return this.form.controls[this.field.name].dirty; };

}
