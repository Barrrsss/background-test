import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'Имя',
      value: '',
      required: true,
      placeholder: 'Имя',
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Фамилия',
      value: '',
      required: true,
      placeholder: 'Фамилия',
    },
    {
      type: 'number',
      name: 'age',
      label: 'Возраст',
      value: '',
      required: true,
    },
    {
      type: 'dropdown',
      name: 'family',
      label: 'Семейное положение',
      value: 'one',
      required: false,
      options: [
        { key: 'one', label: 'Не женат/Не замужем', styles: 'Не женат/Не замужем' },
        { key: 'two', label: 'Женат/Замужем' }
      ]
    },
    {
      type: 'dropdown',
      name: 'city',
      label: 'Место рождения',
      value: '1',
      required: false,
      options: [
        { key: '1', label: 'Не важно', select: true },
        { key: '2', label: 'Астрахань', select: false },
        { key: '3', label: 'Волгоград', select: false },
        { key: '4', label: 'Волжский', select: false },
      ]
    },
    {
      type: 'checkbox',
      name: 'skills',
      label: 'Навыки',
      required: false,
      options: [
        { key: '1', label: 'Общение' },
        { key: '2', label: 'Иностранные языки' },
        { key: '3', label: 'Бег с препятствиями' },
        { key: '4', label: 'Быстрое чтение' },
        { key: '5', label: 'Самозащита' },
        { key: '6', label: 'Вождение' },
        { key: '7', label: 'Программирование' },
        { key: '8', label: 'Управление вертолетом' },
      ]
    },
    {
      type: 'text',
      name: 'university',
      label: 'ВУЗ',
      value: '',
      placeholder: 'Например, ВолГУ',
      required: false,
    },

  ];

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }


  getFields() {
    return this.fields;
  }

}
