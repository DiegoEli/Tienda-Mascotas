import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent {

  listaProductosGatos: Producto[] = [];


  constructor(){
    this.listaProductosGatos = [
      {idProducto: 1000, nombre: "Happy Cat Minkas Junior Care", descripcion: "Almentación PREMIUM para gatos cachorros.",
      idCategoria: 1, precioVenta: 14, stock: 30, urlFoto: "./assets/img/prod-gatos/comida_gato_1.png"},
      {idProducto: 1001, nombre: "Whiskas Alimento Húmedo Para Gatitos Cachorros 5 Sobres", descripcion: "Collar de cuero para perros",
      idCategoria: 1, precioVenta: 3.80, stock: 25, urlFoto: "./assets/img/prod-gatos/comida_gato_2.png"},
      {idProducto: 1002, nombre: "NUTRAPRO Gatos Gatitos Alimento Premium 2kg", descripcion: "Comida Para Perro Cachorro Raza Mediana Pro-Can",
      idCategoria: 1, precioVenta: 10.00, stock: 6, urlFoto: "./assets/img/prod-gatos/comida_gato_3.png"},
      {idProducto: 1003, nombre: "FINOTRATO Alimento Para Gatos Castrados", descripcion: "Cepillo para perros",
      idCategoria: 1, precioVenta: 17, stock: 9, urlFoto: "./assets/img/prod-gatos/comida_gato_4.png"},
      {idProducto: 1004, nombre: "Ratones 3 Unidades Juguete Clásico", descripcion: "Perfume para mascotas",
      idCategoria: 1, precioVenta: 1, stock: 20, urlFoto: "./assets/img/prod-gatos/juguete_gato_01.png"},
      {idProducto: 6, nombre: "Combo Económico de Juguetes Variados de Gatos", descripcion: "Hueso de hule par perros",
      idCategoria: 1, precioVenta: 10, stock: 10, urlFoto: "./assets/img/prod-gatos/juguete_gato_02.png"},      
      {idProducto: 6, nombre: "Juguete Porfiado Premium Con Plumas", descripcion: "Juguete porfiado premium con plumas para gatos",
      idCategoria: 1, precioVenta: 4.50, stock: 10, urlFoto: "./assets/img/prod-gatos/juguete_gato_03.png"},      
      {idProducto: 6, nombre: "Caña De Pescar Telescópica Juguete Para Gato", descripcion: "Caña de pescar telescopica juguete para gato",
      idCategoria: 1, precioVenta: 10.00, stock: 10, urlFoto: "./assets/img/prod-gatos/juguete_gato_04.png"}
    ]
  }

  agregarCarrito(){

  }
}
