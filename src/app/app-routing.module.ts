import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RolesComponent } from './pages/roles/roles.component';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddUserComponent } from './pages/users/add-user/add-user.component';
import { ViewUserComponent } from './pages/users/view-user/view-user.component';

const routes: Routes = [
  {path: 'users', children: [
    {path: '', component: UsersComponent, title: 'Usuarios BikeStore'},
    {path: 'add', component: AddUserComponent, title: 'Agregar Usuario BikeStore'},
    {path: ':id', component: ViewUserComponent, title: 'Ver Usuario BikeStore'},
    ]
  },
  {path: 'roles', component: RolesComponent, title: 'Roles BikeStore'},
  {path: '', redirectTo: '/users', pathMatch: 'full', title: 'No Encontrado en BikeStore'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
