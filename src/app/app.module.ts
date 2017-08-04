import { BackendService } from './services/backend.service';
import { MoviesService } from './services/movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { KidTimeComponent } from './components/kid-time/kid-time.component';
import { MovieComponent } from './components/movie/movie.component';
import { LandingComponent } from './components/landing/landing.component';
import { FamilyLoginLinkComponent } from './components/landing/family-login-link/family-login-link.component';
import { NavbarComponent } from './components/landing/navbar/navbar.component';

import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule, Action } from '@ngrx/store';
import { appReducer, initialState, State, ScreenEffects } from './store/model';
import { EffectsModule } from "@ngrx/effects";

import { routes } from './app.routes';
import { FamilyLoginComponent } from './components/family-login/family-login.component';
import { FamilyHomeComponent } from './components/family-home/family-home.component';
import { FamilyDashboardComponent } from './components/family-dashboard/family-dashboard.component';
import { FamilySignupComponent } from './components/family-signup/family-signup.component';
import { KidHomeComponent } from './components/kid-home/kid-home.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    KidTimeComponent,
    MovieComponent,
    LandingComponent,
    FamilyLoginLinkComponent,
    NavbarComponent,
    FamilyLoginComponent,
    FamilyHomeComponent,
    FamilyDashboardComponent,
    FamilySignupComponent,
    KidHomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(<any>{app: appReducer}, {initialState}),
    BrowserAnimationsModule,
    EffectsModule.forRoot([
      ScreenEffects
    ]),
    StoreRouterConnectingModule,
    TimepickerModule.forRoot(),
  ],
  providers: [MoviesService, BackendService, ScreenEffects],
  bootstrap: [AppComponent]
})
export class AppModule { }
