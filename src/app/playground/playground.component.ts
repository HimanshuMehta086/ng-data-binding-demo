import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @Output() customEvent = new EventEmitter();
  counter = 0;

  constructor() {}

  ngOnInit() {}

  clickHandler() {
    this.counter++;

    this.customEvent.emit({
      on: new Date(),
      message: 'Custom event emitted from click handler',
      clickCount: this.counter
    });
  }
}
