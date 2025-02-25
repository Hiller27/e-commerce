import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'home', component: HomeComponent }, // Página principal
  { path: 'login', component: LoginComponent }, // Página principal
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección en caso de rutas desconocidas
];
