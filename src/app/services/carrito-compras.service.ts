import { Injectable } from '@angular/core';
import { Producto } from '../model/Producto.model';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CarritoMap } from '../model/ItemCarrito.model';

@Injectable({
  providedIn: 'root',
})
export class CarritoComprasService {
  constructor() {}

  public lista_carrito = new BehaviorSubject<CarritoMap>(new Map());

  get obtenerProductos(): Observable<CarritoMap> {
    return this.lista_carrito.asObservable();
  }

  agregarProducto(producto: Producto): void {
    const carrito = new Map(this.lista_carrito.value);
    if (carrito.has(producto.id)) {
      const productoActual = carrito.get(producto.id)!;
      productoActual.cantidad += 1;
      productoActual.subTotal += producto.precio;
    } else {
      carrito.set(producto.id, {
        producto: producto,
        cantidad: 1,
        subTotal: producto.precio,
      });
    }
    this.lista_carrito.next(carrito);
  }

  actualizarCantidad(producto: Producto, cantidad: number): void {
    const carrito = new Map(this.lista_carrito.value);
    if (carrito.has(producto.id)) {
      const productoActual = carrito.get(producto.id)!;
      if (cantidad >= 1) {
        productoActual.cantidad = cantidad;
        productoActual.subTotal = producto.precio * productoActual.cantidad;
      }
    }
    this.lista_carrito.next(carrito);
  }

  eliminarProducto(producto: Producto): void {
    const carrito = new Map(this.lista_carrito.value);
    carrito.delete(producto.id);
    this.lista_carrito.next(carrito);
  }

  get totalProductos(): Observable<number> {
    return this.lista_carrito.asObservable().pipe(
      map((carrito) => {
        let total = 0;
        for (const item of carrito.values()) {
          total += item.cantidad;
        }
        return total;
      })
    );
  }

  get montoTotal(): Observable<number> {
    return this.lista_carrito.asObservable().pipe(
      map((carrito) => {
        let total = 0;
        for (const item of carrito.values()) {
          total += item.subTotal;
        }
        return total;
      })
    );
  }
}
