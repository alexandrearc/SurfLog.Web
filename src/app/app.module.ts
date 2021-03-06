import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule, MdCoreModule, MdDatepickerModule, MdNativeDateModule, MdListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StarRatingModule } from 'angular-star-rating';
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
import { SessionContainerComponent } from './session-container/session-container.component';

import { APP_PROVIDERS } from './app.providers';

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
    SessionComponent,
    SessionContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdListModule,
    MdCoreModule,
    FlexLayoutModule,
    StarRatingModule.forRoot()
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
