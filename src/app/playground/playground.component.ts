import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  //  @Input() is a field-level decorator
  //  We normally do not initialize the @Input exposed fields
  //  We expect parent component to provide the value for these fields
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
