import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../services/carrito-compras.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { ItemCarrito } from '../../model/ItemCarrito.model';
import { Producto } from '../../model/Producto.model';

@Component({
  selector: 'app-vista-carrito-compras',
  imports: [RouterLink, CommonModule],
  templateUrl: './vista-carrito-compras.component.html',
  styles: ``,
})
export class VistaCarritoComprasComponent implements OnInit {
  productoObservable!: Observable<ItemCarrito[]>;
  total: number = 0;

  constructor(public CarritoComprasService: CarritoComprasService) {}

  ngOnInit(): void {
    this.productoObservable = this.CarritoComprasService.obtenerProductos.pipe(
      map((carrito) => Array.from(carrito.values()))
    );
    this.CarritoComprasService.montoTotal.subscribe((total: number) => {
      this.total = total;
    });
  }

  decrementar(producto: Producto, cantidad: number) {
    const nuevaCantidad = cantidad - 1;
    this.CarritoComprasService.actualizarCantidad(producto, nuevaCantidad);
  }

  incrementar(producto: Producto, cantidad: number) {
    const nuevaCantidad = cantidad + 1;
    this.CarritoComprasService.actualizarCantidad(producto, nuevaCantidad);
  }

  eliminar(producto: Producto) {
    this.CarritoComprasService.eliminarProducto(producto);
  }
}
