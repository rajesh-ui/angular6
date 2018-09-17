import { TestBed, inject } from '@angular/core/testing';

import { UserService } from './user.service';

import { HttpModule } from '@angular/http';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports: [HttpModule]
    });
  });

  const user = {
    name: 'test_unit',
    email: 'test@unit.com',
    tel: 12345678,
    created: 0
  }
  let id = null;

  it('User Serviceshould be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should create User', inject([UserService], (service: UserService) => {
    service.createUser(user).then(data => {
      const test_data = data.json();
      expect(test_data.name).toEqual('test_unit');
      id = test_data.id;
    });
  }));

  it('should edit User', inject([UserService], (service: UserService) => {
    const modification = {
      name: 'test_unit_edit',
      email: 'test@unit.com',
      tel: 12345678,
      created: 0,
      id: id
    }
    service.editUser(modification).then(data => {
      const test_data = data.json();
      expect(test_data.name).toEqual('test_unit_edit');
    });
  }));

  it('should delete User', inject([UserService], (service: UserService) => {
    service.deleteUser(id).then(data => {
      service.http.get(service.api_endpoint + service.module_name + '/' + id).toPromise()
      .then(val => {
        const dat = val.json();
        expect(dat).toEqual({});
      });
    })
  }));
});
