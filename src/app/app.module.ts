import { ScreenEffects } from './store/screen-effects';
import { AuthService } from './services/auth.service';
import { BackendService } from './services/backend.service';
import { MoviesService } from './services/movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
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
import { initialState, State } from './store/model';
import { EffectsModule } from "@ngrx/effects";

import { routes } from './app.routes';
import { FamilyLoginComponent } from './components/family-login/family-login.component';
import { FamilyHomeComponent } from './components/family-home/family-home.component';
import { FamilyDashboardComponent } from './components/family-dashboard/family-dashboard.component';
import { FamilySignupComponent } from './components/family-signup/family-signup.component';
import { KidHomeComponent } from './components/kid-home/kid-home.component';
import { AdminComponent } from './components/admin/admin.component';
import { appReducer } from "./store/app-reducer";
import { InteractiveWrapperComponent } from './components/kid-home/interactive-wrapper/interactive-wrapper.component';
import { BedtimeListComponent } from './components/bedtime-list/bedtime-list.component';
import { ViewingListComponent } from './components/viewing-list/viewing-list.component';
import { KidCardComponent } from './components/kid-card/kid-card.component';
import { ScreentimerComponent } from './components/movie/screentimer/screentimer.component';
import { KidSettingsComponent } from './components/family-dashboard/kid-settings/kid-settings.component';


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
    AdminComponent,
    InteractiveWrapperComponent,
    BedtimeListComponent,
    ViewingListComponent,
    KidCardComponent,
    ScreentimerComponent,
    KidSettingsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(<any>{app: appReducer}, {initialState}),
    EffectsModule.forRoot([
      ScreenEffects
    ]),
    StoreRouterConnectingModule,
    TimepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [MoviesService, BackendService, ScreenEffects, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
