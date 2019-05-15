import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersParentComponent } from './users-parent/users-parent.component';

const routes: Routes = [
  { path: '', redirectTo: '/users' , pathMatch: 'full'},
  { path: 'users', component: UsersParentComponent },
  { path: 'users/:page', component: UsersParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
