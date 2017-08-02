import { KidsService } from './services/kids.service';
import { MoviesService } from './services/movies.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { KidTimeComponent } from './components/kid-time/kid-time.component';
import { ParentSettingsComponent } from './components/parent-settings/parent-settings.component';
import { MovieComponent } from './components/movie/movie.component';
import { LandingComponent } from './components/landing/landing.component';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

const routes:Routes = [
  {path: '', component: LandingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'kid-time', component: KidTimeComponent},
  {path: 'parent-settings', component: ParentSettingsComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    HomeComponent,
    KidTimeComponent,
    ParentSettingsComponent,
    MovieComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({ routerReducer: routerReducer }),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule,
  ],
  providers: [MoviesService, KidsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
