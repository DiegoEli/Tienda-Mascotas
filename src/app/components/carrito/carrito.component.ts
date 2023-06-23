import { Component, OnInit } from '@angular/core';
import { DetallePedido } from 'src/app/interfaces/detalle-pedido';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  listPedido: DetallePedido[] = [];
  totalPagar: number = 0;

  constructor(){
    this.listPedido = [
      {urlFoto: "./assets/img/prod-perros/P0001.jpg", descripcion: "Hueso de hule para perros", precioVenta: 3, cantidad: 1, total: 3},
      {urlFoto: "./assets/img/prod-perros/P0002.jpg", descripcion: "Collar de cuero para perros", precioVenta: 3, cantidad: 1, total: 3},
      {urlFoto: "./assets/img/prod-perros/P0003.jpg", descripcion: "Comida Para Perro Cachorro Raza Mediana Pro-Can", precioVenta: 3, cantidad: 2, total: 6}
    ];
  }
  ngOnInit(): void {
    this.sumaTotal();
  }

  sumaTotal(){
    this.listPedido.forEach(element => this.totalPagar = this.totalPagar + element.total);
  }

  quitarProducto(indice:number):void{
    this.listPedido.splice(indice,1);
  }
}
