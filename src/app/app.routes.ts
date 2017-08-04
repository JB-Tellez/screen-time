import { KidHomeComponent } from './components/kid-home/kid-home.component';
import { FamilyDashboardComponent } from './components/family-dashboard/family-dashboard.component';
import { FamilySignupComponent } from './components/family-signup/family-signup.component';
import { FamilyHomeComponent } from './components/family-home/family-home.component';
import { FamilyLoginComponent } from './components/family-login/family-login.component';
import { LandingComponent } from './components/landing/landing.component';
import { Routes } from '@angular/router';

export const routes:Routes = [
  {path: '', component: LandingComponent},
  {path: 'families/:id', component: FamilyHomeComponent},
  {path: 'families/:id/dashboard', component: FamilyDashboardComponent},
  {path: 'families/:family_id/kids/:kid_id', component: KidHomeComponent},
  {path: 'login', component:FamilyLoginComponent}, 
  {path: 'signup', component:FamilySignupComponent}, 

]