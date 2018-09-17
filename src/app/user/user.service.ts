import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

export interface User {
  name;
  email;
  tel;
  created;
}

@Injectable()
export class UserService {

  api_endpoint = 'http://localhost:3000/';

  module_name = 'customers';

  query = null;

  constructor(public http: Http) { }

  createUser(user: User) {
    const url = this.api_endpoint + this.module_name;
    user.created = +(new Date());
    return this.http.post(url, user)
      .toPromise();
  }

  editUser(user) {
    const url = this.api_endpoint + this.module_name + '/' + user.id;
    user.created = +(new Date());
    return this.http.put(url, user).toPromise();
  }

  deleteUser(id) {
    const url = this.api_endpoint + this.module_name + '/' + id;
    return this.http.delete(url).toPromise();
  }

  getUser(pageNum, rowsPerPage) {
    const url = this.api_endpoint + this.module_name + '?_sort=created&_order=desc' + `&_page=${pageNum}&_limit=${rowsPerPage}`;
    return this.http.get(url);
  }

  searchUser(term) {
    const url = this.api_endpoint + this.module_name + '?q=' + term;
    return this.http.get(url);
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchUser(term));
  }

}
