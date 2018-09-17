import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  expand = 0;
  constructor(private _global: GlobalService) { }

  toggle() {
    this._global.toggleSideNav();
  }

  ngOnInit() {
    this._global.sidenav_expansion_event.subscribe(value => {
      this.expand = value;
    })
  }

}
