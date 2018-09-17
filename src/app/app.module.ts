import { BrowserModule } from '@angular/platform-browser';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GlobalService } from './global.service';

import { AppRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
