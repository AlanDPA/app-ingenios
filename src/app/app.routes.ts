import { Routes } from '@angular/router';
import { VistaProductosComponent } from './views/vista-productos/vista-productos.component';
import { VistaCarritoComprasComponent } from './views/vista-carrito-compras/vista-carrito-compras.component';

export const routes: Routes = [
    {path:'', component:VistaProductosComponent},
    {path:'cart', component:VistaCarritoComprasComponent}
];
