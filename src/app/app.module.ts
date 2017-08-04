import { BackendService } from './services/backend.service';
import { ParentComponent } from './components/parent/parent.component';
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
import { HomeComponent } from './components/home/home.component';
import { KidTimeComponent } from './components/kid-time/kid-time.component';
import { ParentSettingsComponent } from './components/parent-settings/parent-settings.component';
import { MovieComponent } from './components/movie/movie.component';
import { LandingComponent } from './components/landing/landing.component';
import { KidsLoginComponent } from './components/landing/kids-login/kids-login.component';
import { NavbarComponent } from './components/landing/navbar/navbar.component';

import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule, Action } from '@ngrx/store';
import { appReducer, initialState, State, ScreenEffects } from './store/model';
import { EffectsModule } from "@ngrx/effects";
import { ParentsComponent } from './components/parents/parents.component';

import { routes } from './app.routes';
import { KidComponent } from './components/kid/kid.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    KidTimeComponent,
    ParentSettingsComponent,
    MovieComponent,
    LandingComponent,
    ParentComponent,
    ParentsComponent,
    KidComponent,
    KidsLoginComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(<any>{app: appReducer}, {initialState}),
    BrowserAnimationsModule
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
