import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { I18nService } from '../i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _global: GlobalService, private _i18n: I18nService) { }

  changeLocale(event) {
    this._i18n.changeLocale(event.target.value);
  }

  toggleSidenav() {
    this._global.toggleSideNav();
  }

  ngOnInit() {
    this._i18n.changeLocale('en');
  }

}
