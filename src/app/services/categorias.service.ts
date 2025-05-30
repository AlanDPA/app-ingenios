import { Injectable } from '@angular/core';
import { Categoria } from '../model/Categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor() { }

  public lista_categorias:Categoria[] = [
    new Categoria(1,'Frituras'),
    new Categoria(2,'Bebidas'),
    new Categoria(3,'Postres')
  ]

  get obtenerListaCategorias():Categoria[] {
    return this.lista_categorias
  }
}
