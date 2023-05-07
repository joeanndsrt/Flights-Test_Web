import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FlightsTabComponent } from './components/flights-tab/flights-tab.component';
import { AboutComponent } from './components/about/about.component';
import { PartnersComponent } from './components/partners/partners.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { PlacesComponent } from './components/places/places.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PackagesCarouselComponent } from './components/packages-carousel/packages-carousel.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { PicColumnComponent } from './components/pic-column/pic-column.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { CarouselModule } from 'primeng/carousel';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SearchComponent,
    FlightsTabComponent,
    AboutComponent,
    PartnersComponent,
    ExperienceComponent,
    PlacesComponent,
    CarouselComponent,
    PackagesComponent,
    PackagesCarouselComponent,
    FeaturedComponent,
    PicColumnComponent,
    AboutUsComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSelectModule,
    MatChipsModule,
    MatDividerModule,
    MatMenuModule,
    CarouselModule,
    AvatarModule,
    InputTextModule,
    ScrollingModule,
    FormsModule,
    CheckboxModule,
    CardModule,
    HttpClientModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
