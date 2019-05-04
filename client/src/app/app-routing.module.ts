import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { CalanderComponent } from './calander/calander.component';
import { CrawlerComponent } from './crawler/crawler.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent},
  { path: 'calander', component: CalanderComponent },
  { path: 'crawler', component: CrawlerComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(appRoutes)],
})
export class AppRoutingModule {


}
