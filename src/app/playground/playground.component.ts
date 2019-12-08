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

  //  It is possible to alias the title using @Input('alias')
  //  This is discouraged and Angular linting warns
  //  Please refer to Angular Styleguide: https://angular.io/guide/styleguide#decorate-input-and-output-properties
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
