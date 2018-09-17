import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Headers } from '@angular/http';

@Injectable()
export class I18nService {
  localeChange$ = new Subject<string>();
  constructor(public _http: Http) { }

  changeLocale(locale) {
    this._http.get('./assets/locale/' + locale + '.json').toPromise().then(data => {
      this.localeChange$.next(data.json());
    })
  }

}
