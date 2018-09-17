import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalService {
  sidenav_expansion_event: Subject<number>;
  sidenav_expanded = 0;

  constructor() {
    this.sidenav_expansion_event = new Subject();
  }

  toggleSideNav() {
    if (document.body.classList.contains('expand')) {
      document.body.classList.remove('expand');
    } else {
      document.body.classList.add('expand');
    }
    this.sidenav_expanded = this.sidenav_expanded ? 0 : 1;
    this.sidenav_expansion_event.next(this.sidenav_expanded);
  }
}
