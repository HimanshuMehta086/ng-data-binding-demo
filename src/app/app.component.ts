import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //  Custom event binding
  //  Step 2: Parent provides the handler for the custom event of the child
  title = 'ng-data-binding-demo';

  parentHandler(args) {
    console.log('Parent handler called', args);
  }
}
