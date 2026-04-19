import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'conocenos', component: InicioComponent },
  { path: 'productos', component: InicioComponent }
];