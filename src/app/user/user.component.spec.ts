import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { UserComponent } from './user.component';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { I18nService } from '../i18n.service';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [CommonModule, NoopAnimationsModule, FormsModule,
        HttpModule, TableModule, ConfirmDialogModule, MessagesModule, MessageModule],
      providers: [UserService, I18nService, ConfirmationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have a h1 tag of `User Management`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('User Management');
  });

  it('Should load users', () => {
    component.ngOnInit();
    fixture.whenStable().then(() => {
      expect(de.queryAll(By.css('tr')).length).toBe(component.rowsPerpage + 1);
    });
  });

});
