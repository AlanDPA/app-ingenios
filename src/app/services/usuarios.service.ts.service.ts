import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceTsService {

  constructor() { }

  private lista_usuarios:Usuario[] = [
    new Usuario(1,'Javier','Aquino','07409345','995464213','Av. Benavides 2509','aquino07@gmail.com','https://www.fotosdeperfil.org/home/examples/in/1.jpg'),
    new Usuario(2,'Angel','Tarantino','06409345','912464213','Av. Benavides 102','taran23@gmail.com','https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/e40b6ea6361a1abe28f32e7910f63b66/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg'),
    new Usuario(3,'Maria','Lozano','07404345','995422213','Av. Benavides 4093','lozano293@gmail.com','https://media.glamour.mx/photos/65b096f13756393e0200c63d/16:9/w_2560%2Cc_limit/que-significa-tu-foto-de-perfil.jpg')
  ]

  get usuarios():Usuario[] {
    return this.lista_usuarios
  }
}
