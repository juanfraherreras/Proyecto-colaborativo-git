import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ConocenosComponent } from './conocenos/conocenos.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'productos', component: InicioComponent }
];