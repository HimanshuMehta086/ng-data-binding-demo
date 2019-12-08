import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-data-binding-demo';

  constructor() {
    setTimeout(() => {
      this.title = 'Changed title at the parent';
    }, 2000);
  }

  foo() {
    //  [title] depends on foo(), which depends on this.title
    //  Angular fires the change detection cycle
    //  when timer is triggered in the constructor.
    //  This change eventually permeates to the child.
    return `foo() in AppComponent provides: ${this.title}`;
  }
}
