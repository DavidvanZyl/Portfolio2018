import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from 'app/content/home/home.component';
import { AboutComponent } from 'app/content/about/about.component';
import { WorkComponent } from 'app/content/work/work.component';
import { ContactComponent } from 'app/content/contact/contact.component';
import { PageNotFoundComponent } from 'app/content/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, data: {page: 'home'} },
  { path: 'about', component: AboutComponent, data: {page: 'about'} },
  { path: 'work', component: WorkComponent, data: {page: 'work'} },
  { path: 'contact', component: ContactComponent, data: {page: 'contact'} },
  { path: '**', component: PageNotFoundComponent, data: {page: 'notFound'} }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
