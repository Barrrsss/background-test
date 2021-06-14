import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'dropdown',
    templateUrl: './testSelect.html',
    styleUrls: ['./testSelect.scss']
})
export class DropDownComponent {
    @Input() field:any = {};
    @Input() form!:FormGroup;

    constructor() {

    }
}
