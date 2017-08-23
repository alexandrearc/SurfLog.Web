import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { BeachDetailComponent } from './beach-detail.component';
import { BeachesComponent } from './beaches.component';
import { DashboardComponent } from './dashboard.component';
import { BeachService } from './beach.service';
import { BeachSearchComponent} from './beach-search.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BeachDetailComponent,
    BeachesComponent,
    BeachSearchComponent
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
    BeachService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
