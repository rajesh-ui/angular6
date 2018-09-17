import { TestBed, inject } from '@angular/core/testing';

import { GlobalService } from './global.service';

describe('GlobalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalService]
    });
  });

  it('Global Service should be created', inject([GlobalService], (service: GlobalService) => {
    expect(service).toBeTruthy();
  }));

  it('should toggle sideMenu', inject([GlobalService], (service: GlobalService) => {
    service.sidenav_expanded = 0;
    service.toggleSideNav();
    service.sidenav_expansion_event.subscribe(data => {
      expect(data).toEqual(1);
    });
    expect(service.sidenav_expanded).toEqual(1);
  }));
});
