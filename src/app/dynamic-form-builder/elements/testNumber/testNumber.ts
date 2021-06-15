import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'number',
  templateUrl: './testNumber.html',
  styleUrls: ['./testNumber.scss']
})
export class TextNumberComponent {
  @Input() field:any = {};
  @Input() form!:FormGroup;
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() {

  }

  numberUp() {
    this.form.value.age = (this.form.value.age/1) + 1;
  }

  numberDown() {

    if (this.form.value.age !== 0) {
      this.form.value.age = (this.form.value.age/1) - 1;
    }
  }
}
