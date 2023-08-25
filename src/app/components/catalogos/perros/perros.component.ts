import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';
import { ProductoInterface } from 'src/app/interfaces/producto/producto.module';
import { ProductoService } from 'src/app/services/producto.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { CategoriaInterface } from 'src/app/interfaces/categoria/categoria.module';

@Component({
  selector: 'app-perros',
  templateUrl: './perros.component.html',
  styleUrls: ['./perros.component.css']
})
export class PerrosComponent implements OnInit {
  listaProductos: ProductoInterface[] = [];
  listaCategorias: CategoriaInterface[] = [];
  productoSeleccionado!: Producto;

  constructor(
    private productoServ: ProductoService,
    private categoriaServ: CategoriaService){
  }
  ngOnInit(): void {
    this.cargarProductos();
    this.cargarCategorias();
  }

  agregarCarrito(){
    window.alert("Producto añadido al carrito.");
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

  obtenerObjeto(i: number){
    //this.productoSeleccionado = this.listaProductos[i];
  }

  cargarProductos(){
    this.productoServ.getProductos().subscribe(
      (data) => {
        this.listaProductos = data;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }

  cargarCategorias(){
    this.categoriaServ.getCategorias().subscribe(
      (data) => {
        this.listaCategorias = data;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}
