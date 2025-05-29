import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../../services/carrito-compras.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrito-compras',
  imports: [RouterModule],
  templateUrl: './carrito-compras.component.html',
  styles: ``,
})
export class CarritoComprasComponent implements OnInit {
  constructor(public CarritoComprasService: CarritoComprasService) {}

  lista_carrito: number = 0;

  ngOnInit(): void {
    this.CarritoComprasService.totalProductos.subscribe((total: number) => {
      this.lista_carrito = total;
    });
  }
}
