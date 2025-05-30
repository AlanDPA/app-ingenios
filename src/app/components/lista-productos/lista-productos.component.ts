import { Component, OnInit } from '@angular/core';
import { Producto } from '../../model/Producto.model';
import { ProductosService } from '../../services/productos.service';
import { CommonModule } from '@angular/common';
import { CarritoComprasService } from '../../services/carrito-compras.service';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-lista-productos',
  imports: [CommonModule],
  templateUrl: './lista-productos.component.html',
})
export class ListaProductosComponent implements OnInit {
  constructor(
    public ProductosService: ProductosService,
    public CarritoComprasService: CarritoComprasService,
    public CategoriasService: CategoriasService
  ) {}

  lista_productos: Producto[] = [];
  categorias: string[] = [];
  categorias_unicas: string[] = [];

  ngOnInit(): void {
    this.lista_productos = this.ProductosService.obtener_lista_productos;

    for (const producto of this.lista_productos) {
      this.categorias.push(producto.categoria);
    }

    this.categorias_unicas = [...new Set(this.categorias)];
  }

  agregarProducto(producto: Producto) {
    this.CarritoComprasService.agregarProducto(producto);
  }
}
