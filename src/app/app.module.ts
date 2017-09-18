import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BeachDetailComponent } from './beach-detail.component';
import { BeachSearchComponent} from './beach-search.component';
import { BeachesComponent } from './beaches.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home.component';
import { LoginComponent} from './login.component';

import { AuthService } from './service/auth.service';
import { BeachService } from './service/beach.service';
import { AuthGuard } from './guard/auth.guard';
import { UserService } from './service/user.service';
import { RegisterComponent } from './register.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
    BeachService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
