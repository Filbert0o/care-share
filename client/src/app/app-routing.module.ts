import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule { }
