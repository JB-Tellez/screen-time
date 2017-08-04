import { BackendService } from './services/backend.service';
import { ParentComponent } from './components/parent/parent.component';
import { AllUserData } from './../../shared/to/all-user-data';
import { KidsService } from './services/kids.service';
import { MoviesService } from './services/movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { KidTimeComponent } from './components/kid-time/kid-time.component';
import { ParentSettingsComponent } from './components/parent-settings/parent-settings.component';
import { MovieComponent } from './components/movie/movie.component';
import { LandingComponent } from './components/landing/landing.component';
import { KidsLoginComponent } from './components/landing/kids-login/kids-login.component';
import { NavbarComponent } from './components/landing/navbar/navbar.component';

import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule, Action } from '@ngrx/store';
import { appReducer, initialState, State } from './store/model';

const routes:Routes = [
  {path: '', component: LandingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'kid-time', component: KidTimeComponent},
  {path: 'parent/:id', component: ParentComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    KidTimeComponent,
    ParentSettingsComponent,
    MovieComponent,
    LandingComponent,
    KidsLoginComponent,
    NavbarComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(<any>{app: appReducer}, {initialState}),
    StoreRouterConnectingModule,
    BrowserAnimationsModule
  ],
  providers: [MoviesService, KidsService, BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
