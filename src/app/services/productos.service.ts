import { Injectable } from '@angular/core';
import { Producto } from '../model/Producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor() {}
  public lista_productos:Producto[] = [
    new Producto(
      1,
      'Pan con pollo deshilachado',
      'https://www.sangucheriatrujillo.com/wp-content/uploads/2024/07/productos_004.jpg',
      'Desayuno',
      30,
      9.0
    ),
    new Producto(
      2,
      'Pollo crunch',
      'https://imag.bonviveur.com/pollo-frito-crujiente.jpg',
      'Desayuno',
      20,
      12.0
    ),
    new Producto(
      3,
      'Twistters',
      'https://images.getduna.com/c6a9073b-9a42-4886-b0fc-1033bbd6a60c/8ed9ad92e12f1fcc_domicilio_411_744x744_1708524605.png?d=600x600&format=webp',
      'Desayuno',
      25,
      14.0
    ),
    new Producto(
      4,
      'Salchipollo',
      'https://public-files.gumroad.com/0oxptk4smtfmp7qzxdh64kfc0gtw',
      'Desayuno',
      18,
      18.0
    ),
    new Producto(
      5,
      'Alitas Acevichadas',
      'https://frankoschicken.pe/wp-content/uploads/2023/03/ALITAS-BROASTER.png',
      'Desayuno',
      25,
      19.0
    ),
  ];

  obtener_lista_productos(): Producto[] {
    return this.lista_productos;
  }
}
