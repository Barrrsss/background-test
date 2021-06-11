import { Injectable } from '@angular/core';

export interface  Data {
  name:string;
  age:number;
  family: string;
  university: string;
  birthplace: string;
  visibility: boolean;
  skills: Skills[];
}
interface  Skills {
  skill: string;
}
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class DataService {

}
