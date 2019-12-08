import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  //  A quick reference to TypeScript: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
  //  Fields are public by default
  //  If initialized at the time of declaration, the types are auto-inferred

  title = 'hello there!'; //  no characters, only strings
  price = 1560.6589741; //  number is a double-precision floating point unit
  rateOfGrowth = 0.326;
  today = new Date(); //  an object
  status = true;

  constructor() {}

  //  This is a life-cycle hook
  ngOnInit() {}

  //  getter is a function inside, but works as a readonly field outside its body
  //  consider for computed properties
  get pi(): number {
    //  always a good idea to type-annotate
    return 3.14159265359; //  a getter has to return
  }
}
