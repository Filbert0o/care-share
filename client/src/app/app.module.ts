import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';

import { NgbModule, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { MaterialModule } from "./material.module";
import { CallbackComponent } from './callback/callback.component';
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { CalanderComponent } from './calander/calander.component';
import { FlatpickrModule } from "angularx-flatpickr";
import { CrawlerComponent } from './crawler/crawler.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    CalanderComponent,
    CrawlerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbModalModule,
    MaterialModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
