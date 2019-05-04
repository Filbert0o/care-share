import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from "./material.module";
import { CallbackComponent } from './callback/callback.component';



@NgModule({
  declarations: [AppComponent, HomeComponent, CallbackComponent],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MaterialModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
