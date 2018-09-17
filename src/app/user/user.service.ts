import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

export interface User {
  name;
  email;
  tel;
  created;
}

@Injectable()
export class UserService {

  private api_endpoint = 'http://localhost:3000/';

  private module_name = 'customers';

  constructor(private http: Http) { }

  createUser(user: User) {
    const url = this.api_endpoint + this.module_name;
    return this.http.post(url, user)
    .toPromise();
  }

  editUser(user) {
    const url = this.api_endpoint + this.module_name + '/' + user.id;
    return this.http.put(url, user).toPromise();
  }

  deleteUser(id) {
    const url = this.api_endpoint + this.module_name + '/' + id;
    return this.http.delete(url).toPromise();
  }

  getUser(pageNum, rowsPerPage, filter?) {
    const url = this.api_endpoint + this.module_name + '?_sort=created&_order=desc' + `&_page=${pageNum}&_limit=${rowsPerPage}`;
    return this.http.get(url).toPromise();
  }

}
