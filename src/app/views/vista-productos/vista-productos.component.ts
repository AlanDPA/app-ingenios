import { Component } from '@angular/core';
import { ListaProductosComponent } from "../../components/lista-productos/lista-productos.component";
import { CarritoComprasComponent } from "../../components/carrito-compras/carrito-compras.component";

@Component({
  selector: 'app-vista-productos',
  imports: [ListaProductosComponent, CarritoComprasComponent],
  templateUrl: './vista-productos.component.html',
  styles: ``
})
export class VistaProductosComponent {

}
