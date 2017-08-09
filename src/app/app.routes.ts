import { MovieComponent } from './components/movie/movie.component';
import { ScreentimerComponent } from './components/movie/screentimer/screentimer.component';
import { MoviesComponent } from './components/movies/movies.component';
import { AdminComponent } from './components/admin/admin.component';
import { KidHomeComponent } from './components/kid-home/kid-home.component';
import { FamilyDashboardComponent } from './components/family-dashboard/family-dashboard.component';
import { FamilySignupComponent } from './components/family-signup/family-signup.component';
import { FamilyHomeComponent } from './components/family-home/family-home.component';
import { FamilyLoginComponent } from './components/family-login/family-login.component';
import { LandingComponent } from './components/landing/landing.component';
import { KidSettingsComponent } from './components/family-dashboard/kid-settings/kid-settings.component';

import { Routes } from '@angular/router';

export const routes:Routes = [
  {path: '', component: LandingComponent},
  {path: 'family/:id', component: FamilyHomeComponent},
  {path: 'family/1', component: FamilyHomeComponent},
  {path: 'family/:id/dashboard', component: FamilyDashboardComponent},
  {path: 'family/:family_id/kid/:kid_id', component: KidHomeComponent},
  {path: 'login', component:FamilyLoginComponent}, 
  {path: 'signup', component:FamilySignupComponent}, 
  {path: 'admin', component:AdminComponent}, 
  {path: 'movies', component:MoviesComponent}, 
  {path: 'movie/:id', component:MovieComponent}, 
  {path: 'screentimer', component:ScreentimerComponent}, 
  {path: 'kid-settings', component:KidSettingsComponent}
]