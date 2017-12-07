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
import { SessionContainerComponent }   from './session-container/session-container.component';
import { SessionResolve }       from './service/session.resolve';

const routes: Routes = [
  { path: '',  component: HomeComponent},
  { path: 'session',  component: SessionContainerComponent, canActivate: [AuthGuard]},
  { path: 'session/:id', component: SessionContainerComponent,
                         canActivate: [AuthGuard],
                         resolve: { session: SessionResolve }
  },
  { path: 'beaches',    component: BeachesComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
