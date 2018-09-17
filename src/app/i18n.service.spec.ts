import { TestBed, inject } from '@angular/core/testing';

import { I18nService } from './i18n.service';

import { HttpModule } from '@angular/http';

describe('I18nService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [I18nService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([I18nService], (service: I18nService) => {
    expect(service).toBeTruthy();
  }));
});
