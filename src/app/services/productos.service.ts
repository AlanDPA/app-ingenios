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
      'Frituras',
      30,
      9.0
    ),
    new Producto(
      2,
      'Pollo crunch',
      'https://imag.bonviveur.com/pollo-frito-crujiente.jpg',
      'Frituras',
      20,
      12.0
    ),
    new Producto(
      3,
      'Twistters',
      'https://images.getduna.com/c6a9073b-9a42-4886-b0fc-1033bbd6a60c/8ed9ad92e12f1fcc_domicilio_411_744x744_1708524605.png?d=600x600&format=webp',
      'Frituras',
      25,
      14.0
    ),
    new Producto(
      4,
      'Salchipollo',
      'https://public-files.gumroad.com/0oxptk4smtfmp7qzxdh64kfc0gtw',
      'Frituras',
      18,
      18.0
    ),
    new Producto(
      5,
      'Alitas Acevichadas',
      'https://frankoschicken.pe/wp-content/uploads/2023/03/ALITAS-BROASTER.png',
      'Frituras',
      25,
      19.0
    ),
    new Producto(
      6,
      'Tres Leches',
      'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2024-09-tres-leches-cake%2Ftres-leches-cake-3246-horizontal_74ed2a-crop',
      'Postres',
      40,
      28.0
    ),
    new Producto(
      7,
      'Torta de Chocolate',
      'https://cocinaperuana.espaciolatino.com/recetas-de-dulces/img600/torta-de-chocolate.jpg',
      'Postres',
      35,
      19.0
    ),
    new Producto(
      8,
      'Cheesecake',
      'https://www.onceuponachef.com/images/2017/12/cheesecake-1200x1393.jpg',
      'Postres',
      25,
      22.0
    ),
    new Producto(
      9,
      'Coca Cola',
      'https://dojiw2m9tvv09.cloudfront.net/53648/product/sintitulo2556.png',
      'Bebidas',
      50,
      3.5
    ),
    new Producto(
      10,
      'Pilsen Callao',
      'https://www.lavina86.pe/wp-content/uploads/2024/04/Cerveza-Pilsen-Callao-Botella-305ml.png',
      'Bebidas',
      25,
      5.0
    ),
    new Producto(
      11,
      'Alfajores x 10 unidades',
      'https://www.culinariamente.com/wp-content/uploads/2024/12/Receta-de-alfajores-de-harina-peruanos.jpg',
      'Postres',
      25,
      10.0
    ),
  ];

  get obtener_lista_productos(): Producto[] {
    return this.lista_productos;
  }
}
