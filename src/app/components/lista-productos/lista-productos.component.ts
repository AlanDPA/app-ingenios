import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/Producto.model';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';
import { CarritoComprasService } from '../../services/carrito-compras.service';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule],
  templateUrl: './lista-productos.component.html',
})
export class ListaProductosComponent implements OnInit {
  constructor(public ProductosService: ProductosService, public CarritoComprasService:CarritoComprasService) {}

  lista_productos: Producto[] = [];

  ngOnInit(): void {
    this.lista_productos = this.ProductosService.obtener_lista_productos();
  }

  agregarProducto(producto:Producto) {
    this.CarritoComprasService.agregarProducto(producto)
  }
}
