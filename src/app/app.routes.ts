import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Ruta para la página de inicio
    { path: 'about', component: HomeComponent },  // Ruta para la página de "Acerca de"
  ]