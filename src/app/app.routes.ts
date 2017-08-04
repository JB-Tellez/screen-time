import { KidComponent } from './components/kid/kid.component';
import { ParentsComponent } from './components/parents/parents.component';
import { ParentComponent } from './components/parent/parent.component';
import { KidTimeComponent } from './components/kid-time/kid-time.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { Routes } from '@angular/router';

export const routes:Routes = [
  {path: '', component: LandingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie/:id', component: MovieComponent},
  {path: 'kid-time', component: KidTimeComponent},
  {path: 'families/:id', component: ParentComponent},
  {path: 'families/:family_id/kids/:kid_id', component: KidComponent},

]