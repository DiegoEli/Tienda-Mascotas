import { Component, OnInit } from '@angular/core';
// import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-conejos',
  templateUrl: './conejos.component.html',
  styleUrls: ['./conejos.component.css']
})
export class ConejosComponent implements OnInit{
  // listaFiltrada: Producto[] = [];
  categoriaSeleccionada: string = 'Todas';
  // listaProductosConejos: Producto[] = [];

  ngOnInit(): void {
    ConejosComponent.constructor();
    this.mostrarProducto(); // Llamar al método mostrarProducto() al cargar el componente
  }

  constructor(){
    // this.listaProductosConejos = [
    //   {idProducto: 1000, nombre: "Jaula Rabbit 100 el Grigia Gabbia Medium", descripcion: "Jaula para conejos de Ferplast",
    //   idCategoria: 3, precioVenta: 89, stock: 15, urlFoto: "./assets/img/prod-conejos/C0001.png"},
    //   {idProducto: 1001, nombre: "Cepillo Ferplast Spazzola Morbida Rod", descripcion: "Cepillo de Ferplast para roedores",
    //   idCategoria: 3, precioVenta: 5.60, stock: 20, urlFoto: "./assets/img/prod-conejos/C0002.png"},
    //   {idProducto: 1002, nombre: "Juguete Ferplast Goodb Nat Bag Carrot", descripcion: "Juguete para mordisquear para roedores",
    //   idCategoria: 2, precioVenta: 4.30, stock: 25, urlFoto: "./assets/img/prod-conejos/C0003.png"},
    //   {idProducto: 1003, nombre: "Botella de Agua Living + Water Bottle", descripcion: "Botella de Agua para conejos",
    //   idCategoria: 1, precioVenta: 10.55, stock: 20, urlFoto: "./assets/img/prod-conejos/C0004.png"},
    //   {idProducto: 1004, nombre: "Juguete Ferplast PA 4756 Vegetale Colorato", descripcion: "Juguete para conejos",
    //   idCategoria: 2, precioVenta: 8, stock: 35, urlFoto: "./assets/img/prod-conejos/C0005.png"},
    //   {idProducto: 6, nombre: "Voltrega Cama para Cobaya 200 GR para Conejos", descripcion: "Cama cálida y suave para conejos",
    //   idCategoria: 2, precioVenta: 15, stock: 15, urlFoto: "./assets/img/prod-conejos/C0006.png"},      
    //   {idProducto: 6, nombre: "Jr Farm Snacks Anillos de Verdura para Conejos", descripcion: "Alimento complementario para todos los conejos",
    //   idCategoria: 1, precioVenta: 3, stock: 30, urlFoto: "./assets/img/prod-conejos/C0007.png"},      
    //   {idProducto: 6, nombre: "Cunipic Champú de Biotina para Conejos", descripcion: "Champú de Biotina para Conejos",
    //   idCategoria: 3, precioVenta: 13, stock: 15, urlFoto: "./assets/img/prod-conejos/C0008.png"}
    // ]
  }
  

  agregarCarrito(){
  }

  filtrarPorCategoria(categoria: string) {
    this.categoriaSeleccionada = categoria;
    // this.listaFiltrada= [...this.listaProductosConejos];

    // Filtrar la lista de productos según la categoría seleccionada
    if (categoria === 'Todas') {
      // Mostrar todos los productos
      // this.listaFiltrada ;
    } else {
      // Filtrar por categoría
      // this.listaFiltrada = this.listaFiltrada.filter(producto => producto.idCategoria === this.getIdCategoria(categoria));
    }
  }

  getIdCategoria(categoria: string): number {
    // Mapear el nombre de la categoría a su correspondiente ID de categoría
    switch (categoria) {
      case 'Alimento':
        return 1;
      case 'Juguetes':
        return 2;
      case 'Limpieza':
        return 3;
      default:
        return 0;
    }
  }

  mostrarProducto(){
    this.categoriaSeleccionada = 'Todas';
    // this.listaFiltrada= [...this.listaProductosConejos];
  }
}
