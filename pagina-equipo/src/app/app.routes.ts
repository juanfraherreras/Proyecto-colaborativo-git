import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ConocenosComponent } from './conocenos/conocenos.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'productos', component: ProductosComponent },
];