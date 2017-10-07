import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BeachesComponent }     from './beaches.component';
import { BeachDetailComponent } from './beach-detail.component';
import { DashboardComponent }   from './dashboard.component';
import { LoginComponent }       from './login.component';
import { AuthGuard }            from './guard/auth.guard';
import { HomeComponent }        from './home.component';
import { AppComponent }         from './app.component';
import { RegisterComponent }    from './register.component';
import { SessionComponent }     from './session.component';

const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'detail/:id', component: BeachDetailComponent },
  { path: 'beaches',    component: BeachesComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'session',  component: SessionComponent, canActivate: [AuthGuard]},
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}