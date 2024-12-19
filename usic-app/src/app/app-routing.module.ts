import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { DiscoverComponent } from './discover/discover.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyRatingsComponent } from './my-ratings/my-ratings.component';
import { StatsComponent } from './stats/stats.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { SignUp1Component } from './sign-up-1/sign-up-1.component';
import { SignUp2Component } from './sign-up-2/sign-up-2.component';

const routes: Routes = [
  { path: '', component: FrontPageComponent},
  { path: 'sign-up/1', component: SignUp1Component},
  { path: 'sign-up/2', component: SignUp2Component},
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent }, 
  { path: 'discover', component: DiscoverComponent },
  { path: 'my-list', component: MyListComponent },
  { path: 'my-ratings', component: MyRatingsComponent },
  { path: 'stats', component: StatsComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
