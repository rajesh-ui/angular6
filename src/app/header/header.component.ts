import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _global: GlobalService) { }

  toggleSidenav() {
    this._global.toggleSideNav();
  }

  ngOnInit() {
  }

}
