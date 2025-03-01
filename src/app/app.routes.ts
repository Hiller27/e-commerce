import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login/login.component';
import { InfUserComponent } from '../inf-user/inf-user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'inf-user', component: InfUserComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
