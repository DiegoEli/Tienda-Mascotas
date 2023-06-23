import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {
  listaProductos: Producto[] = [];  

  constructor(){
  }
  ngOnInit(): void {
    this.cargarDatos();
  }

  agregarCarrito(){
  }

  openModal(){
    const model = document.getElementById('detalle');
    if (model != null){
      model.style.display = 'block';
    }
  }

  closeModal(){
    const model = document.getElementById('detalle');
    if (model != null){
      model.style.display = 'none';
    }
  }

  obtenerObjeto(i: number): Producto{
    return this.listaProductos[i];
  }

  cargarDatos(){
    this.listaProductos = [
      {idProducto: 1, nombre: "Hueso de hule", descripcion: "Hueso de hule para perros",
      idCategoria: 1, precioVenta: 3, stock: 30, urlFoto: "./assets/img/prod-perros/P0001.jpg"},
      {idProducto: 2, nombre: "Collar de cuero", descripcion: "Collar de cuero para perros",
      idCategoria: 1, precioVenta: 3, stock: 25, urlFoto: "./assets/img/prod-perros/P0002.jpg"},
      {idProducto: 3, nombre: "Comida Pro-Can", descripcion: "Comida Para Perro Cachorro Raza Mediana Pro-Can",
      idCategoria: 1, precioVenta: 3, stock: 6, urlFoto: "./assets/img/prod-perros/P0003.jpg"},
      {idProducto: 4, nombre: "Cepillo para perros", descripcion: "Cepillo para perros",
      idCategoria: 1, precioVenta: 3, stock: 9, urlFoto: "./assets/img/prod-perros/P0004.jpg"},
      {idProducto: 5, nombre: "Perfume para mascotas", descripcion: "Perfume para mascotas",
      idCategoria: 1, precioVenta: 3, stock: 10, urlFoto: "./assets/img/prod-perros/P0005.jpg"},
      {idProducto: 6, nombre: "Cama para perros", descripcion: "Hueso de hule par perros",
      idCategoria: 1, precioVenta: 3, stock: 25, urlFoto: "./assets/img/prod-perros/P0006.jpg"}
    ]
  }
}
