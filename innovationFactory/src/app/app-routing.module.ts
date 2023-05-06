import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { PackagesComponent } from './components/packages/packages.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'packages', component: PackagesComponent },
  // { path: 'news', component: FeaturedComponent },
  // { path: 'partners', component: PartnersComponent },
  // { path: 'about-us', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
