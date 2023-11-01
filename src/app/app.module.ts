import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { ViewUserComponent } from './pages/users/view-user/view-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    RolesComponent,
    NotFoundComponent,
    AddUserComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
