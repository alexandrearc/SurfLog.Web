import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdDatepickerModule, MdNativeDateModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BeachDetailComponent } from './beach-detail.component';
import { BeachSearchComponent} from './beach-search.component';
import { BeachesComponent } from './beaches.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home.component';
import { LoginComponent} from './login.component';
import { RegisterComponent } from './register.component';
import { SessionComponent } from './session.component';

import { AuthService } from './service/auth.service';
import { BeachService } from './service/beach.service';
import { SessionService } from './service/session.service';
import { UserService } from './service/user.service';

import { AuthGuard } from './guard/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    BeachDetailComponent,
    BeachesComponent,
    BeachSearchComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    MdDatepickerModule,
    MdNativeDateModule
  ],
  providers: [
    BeachService,
    AuthService,
    AuthGuard,
    SessionService,
    UserService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
