import {Component, OnInit} from '@angular/core';
import {MyservService} from './myserv.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('firstAnimation', [
      state('firstState', style({
        transform: 'scale(1)'
      })),
      state('secondState', style({
        transform: 'scale(1.3)'
      })),
      transition('firstState <=> secondState', animate('200ms ease-in', style({
        transform: 'translateY(10px)'
      })))
    ])
  ]
})
export class AppComponent {

  state = 'firstState'
  constructor(public myservice: MyservService) {}

  animateMe() {
    this.state = (this.state === 'firstState' ? 'secondState' : 'firstState');
  }


}
