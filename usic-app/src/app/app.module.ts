import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyListComponent } from './my-list/my-list.component';
import { MyRatingsComponent } from './my-ratings/my-ratings.component';
import { DiscoverComponent } from './discover/discover.component';
import { StatsComponent } from './stats/stats.component';
import { AccountComponent } from './account/account.component';
import { RouterModule } from '@angular/router';
import { AlbumWidgetComponent } from './album-widget/album-widget.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignUp1Component } from './sign-up-1/sign-up-1.component';
import { SignUp2Component } from './sign-up-2/sign-up-2.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyListComponent,
    MyRatingsComponent,
    DiscoverComponent,
    StatsComponent,
    AccountComponent,
    AlbumWidgetComponent,
    FrontPageComponent,
    NavBarComponent,
    SignUp1Component,
    SignUp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
