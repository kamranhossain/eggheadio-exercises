import { Component, Inject } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `<div>
  <ul>
    <li *ngFor="let message of mail.messages">{{message}}
    </li>
  </ul>
</div>`  
})
export class AppComponent {
  title = "Let's build something";

  constructor(
    @Inject('mail')private mail
  ){

  }
}
