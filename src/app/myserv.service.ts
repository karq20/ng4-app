import { Injectable } from '@angular/core';

@Injectable()
export class MyservService {

  constructor() { }
  cars = ['Ford', 'Chev', 'Merc'];
  myData() {
    return 'this is my data';
  }

}
