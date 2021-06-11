import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';
import { HttpClient  } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-test-input',
  templateUrl: './test-input.component.html',
  styleUrls: ['./test-input.component.scss']
})
export class TestInputComponent implements OnInit {
  data = [];
  constructor(private http: HttpClient ) {}
  getItems() {
    this.http.get('./assets/data.json').subscribe(res => {
      console.log(res);
      res = this.data;
    });
  }

  ngOnInit(): void {
    this.getItems();
    console.log(this.data)
  }

}
