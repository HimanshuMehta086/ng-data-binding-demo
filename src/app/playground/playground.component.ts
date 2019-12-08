import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  //  Angular event object $event can be received with any name
  handler(args) {
    console.log('Button click handled', args);
  }
}
