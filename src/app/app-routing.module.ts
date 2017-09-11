import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeachesComponent }     from './beaches.component';
import { BeachDetailComponent } from './beach-detail.component';
import { DashboardComponent }   from './dashboard.component';
import { LoginComponent }       from "./login.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: BeachDetailComponent },
  { path: 'beaches',    component: BeachesComponent },
  { path: 'login',      component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}