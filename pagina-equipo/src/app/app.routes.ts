import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Página inicial
  { path: 'conocenos', component: InicioComponent }, // Por ahora apuntan a inicio
  { path: 'productos', component: InicioComponent }  // Hasta que los chicos suban lo suyo
];