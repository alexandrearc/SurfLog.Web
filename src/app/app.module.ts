import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BeachDetailComponent } from './beach-detail.component';
import { BeachesComponent } from './beaches.component';
import { DashboardComponent } from './dashboard.component';
import { BeachSearchComponent} from './beach-search.component';
import { LoginComponent} from './login.component';

import { AuthService } from "./service/auth.service";
import { BeachService } from './service/beach.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BeachDetailComponent,
    BeachesComponent,
    BeachSearchComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService, {
   //   passThruUnknownUrl: true
    //}),
    AppRoutingModule
  ],
  providers: [
    BeachService,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
