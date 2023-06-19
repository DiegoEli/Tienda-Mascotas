import { Component } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-conejos',
  templateUrl: './conejos.component.html',
  styleUrls: ['./conejos.component.css']
})
export class ConejosComponent {
  listaProductosConejos: Producto[] = [];

  constructor(){
    this.listaProductosConejos = [
      {idProducto: 1000, nombre: "JAULA RABBIT 100 EL GRIGIA GABBIA", descripcion: "Jaula para conejos de Ferplast",
      idCategoria: 1, precioVenta: 89, stock: 15, urlFoto: "./assets/img/prod-conejos/C0001.png"},
      {idProducto: 1001, nombre: "Cepillo Ferplast Spazzola Morbida Rod", descripcion: "Cepillo de Ferplast para roedores",
      idCategoria: 1, precioVenta: 5.61, stock: 20, urlFoto: "./assets/img/prod-conejos/C0002.png"},
      {idProducto: 1002, nombre: "Juguete Ferplast Goodb Nat Bag Carrot", descripcion: "Juguete para mordisquear para roedores",
      idCategoria: 1, precioVenta: 4.28, stock: 25, urlFoto: "./assets/img/prod-conejos/C0003.png"},
      {idProducto: 1003, nombre: "Botella de Agua Living + Water Bottle", descripcion: "Botella de Agua para conejos",
      idCategoria: 1, precioVenta: 10.55, stock: 20, urlFoto: "./assets/img/prod-conejos/C0004.png"},
      {idProducto: 1004, nombre: "Juguete Ferplast PA 4756 Vegetale Colorato", descripcion: "Juguete para conejos",
      idCategoria: 1, precioVenta: 8, stock: 35, urlFoto: "./assets/img/prod-conejos/C0005.png"},
      {idProducto: 6, nombre: "Voltrega Cama para Cobaya 200 GR", descripcion: "Cama cálida y suave para conejos",
      idCategoria: 1, precioVenta: 15, stock: 15, urlFoto: "./assets/img/prod-conejos/C0006.png"},      
      {idProducto: 6, nombre: "Jr Farm Snacks Anillos de Verdura", descripcion: "Alimento complementario para todos los conejos",
      idCategoria: 1, precioVenta: 3, stock: 30, urlFoto: "./assets/img/prod-conejos/C0007.png"},      
      {idProducto: 6, nombre: "Cunipic Champú de Biotina para Conejos", descripcion: "Champú de Biotina para Conejos",
      idCategoria: 1, precioVenta: 13, stock: 15, urlFoto: "./assets/img/prod-conejos/C0008.png"}
    ]
  }

  agregarCarrito(){

  }

}
