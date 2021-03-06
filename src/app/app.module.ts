import { BrowserModule } from '@angular/platform-browser';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GlobalService } from './global.service';
import { I18nService } from './i18n.service';

import { AppRoutes } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OthersComponent } from './others/others.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    OthersComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [GlobalService, I18nService],
  bootstrap: [AppComponent]
})
export class AppModule { }
