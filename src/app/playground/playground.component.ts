import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  @Output() customEvent = new EventEmitter();

  constructor() {
    setTimeout(() => {
      this.customEvent.emit({
        on: new Date(),
        message: 'Custom event emitted by a timer'
      });
    }, 5000);
  }

  ngOnInit() {}
}
