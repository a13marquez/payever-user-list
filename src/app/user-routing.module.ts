import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersDetailComponent } from './users-detail/users-detail.component';

const routes: Routes = [
  { path: 'users', redirectTo: '/users/1' , pathMatch: 'full'},
  { path: 'users/:page/:id', component: UsersDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
