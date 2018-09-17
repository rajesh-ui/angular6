import { Component, OnInit, } from '@angular/core';
import { UserService, User } from './user.service';
import { ConfirmationService } from 'primeng/api';
import { Subject } from 'rxjs/Subject';
import { I18nService } from '../i18n.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  private strings = {
    'title': 'User Management',
    'name': 'name',
    'email': 'Email Id',
    'tel': 'Telephone',
    'created': 'Created On',
    'create': 'Create User',
    'placeholder': 'Search..'
  };
  private users;
  private openAddpopup = false;
  private rowsPerpage = 10;
  private page = 1;
  private filter = {};
  totalRecords: number;
  loading: boolean;
  msgs = [];
  searchQuery$ = new Subject<string>();

  private user = {
    name: '',
    email: '',
    tel: '',
    created: 0
  };

  constructor(private _service: UserService, private confirmationService: ConfirmationService,
    private _i18n: I18nService) {
    this._service.search(this.searchQuery$)
      .subscribe(data => {
        this.users = data.json();
        this.totalRecords = this.users.length;
      });
  }

  addUser(event) {
    this._service.createUser(this.user)
      .then(data => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record Added' }];
        this.refresh();
        this.openAddpopup = false;
      })
  }

  save(user) {
    user.editable = false;
    const modified_data = { id: user.id, name: user.name, email: user.email, tel: user.tel, created: 0 };
    this._service.editUser(modified_data)
      .then(data => {
        this.msgs = [{ severity: 'info', summary: 'Edited', detail: 'Record Edited Succesfully' }];
      })
  }

  paginate(event) {
    this.page = (event.first / event.rows) + 1;
    this.refresh();
  }

  deleteUser(id, index) {
    this._service.deleteUser(id)
      .then(data => {
        this.msgs = [{ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' }];
        this.refresh();
      })
      .catch(err => {
        console.log(err);
      })
  }

  deleteUserConfirm(id, index) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteUser(id, index);
      },
      reject: () => {
        this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
      }
    });

  }

  refresh() {
    this._service.getUser(this.page, this.rowsPerpage).toPromise()
      .then(data => {
        this.totalRecords = +data.headers.get('x-total-count');
        this.users = data.json();
      })
  }

  ngOnInit() {
    this.refresh();
    this._i18n.localeChange$.subscribe(data => {
      this.strings = data['user'];
    })
  }

}
