import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = VERSION.full;
  users = [{name: 'cust1', email: 'cust1@email.com', tel: '12345666', created: new Date()},
  {name: 'cust1', email: 'cust1@email.com', tel: '12345666', created: new Date()},
  {name: 'cust1', email: 'cust1@email.com', tel: '12345666', created: new Date()},
  {name: 'cust1', email: 'cust1@email.com', tel: '12345666', created: new Date()}];

  addUser() {

  }
}
