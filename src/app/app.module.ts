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

const routes:Routes = [
  {path: '', component: HomeComponent},
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
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
