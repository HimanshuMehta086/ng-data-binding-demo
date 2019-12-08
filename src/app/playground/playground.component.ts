import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  //  Custom event-binding is how a child component can communicate with its parent

  //  There are three steps to this communication

  //  1.  Publish and expose the custom event in the child
  //  2.  Parent hooks to this custom event by providing the handler
  //  3.  At some juncture, the child emits the custom event

  //  EventEmitter should come from @angular/core package
  //  @Output() decorator exposes this custom event to the parent
  //  Parent hooks (by providing the handler) to this event
  //  in the same way a standard DOM event is hooked
  //  It is possible to alias this customEvent field as @Output('alias')
  //  This practice is discouraged and Angular linting warns
  //  Please refer to Angular Styleguide: https://angular.io/guide/styleguide#decorate-input-and-output-properties

  //  Please note, this is step 1
  @Output() customEvent = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
