import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Route, Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


const appRoutes: Routes = [
  { path: '', component: UserComponent },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(appRoutes),
    TableModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule
  ],
  declarations: [UserComponent],
  providers: [UserService, ConfirmationService]
})
export class UserModule { }
