import { Component, OnInit } from '@angular/core';
//import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit   {

  // listaProductosGatos: Producto[] = [];
  // listaFiltrada: Producto[] = [];
  categoriaSeleccionada: string = 'Todas';

  constructor(){
    // this.listaProductosGatos = [
    //   {idProducto: 1000, nombre: "Comida para gato Happy Cat", descripcion: "Almentación PREMIUM para gatos cachorros.",
    //   idCategoria: 1, precioVenta: 14, stock: 30, urlFoto: "./assets/img/prod-gatos/comida_gato_1.png"},
    //   {idProducto: 1001, nombre: "Alimento Húmedo Para Gatitos Cachorros", descripcion: "Collar de cuero para perros",
    //   idCategoria: 1, precioVenta: 3.80, stock: 25, urlFoto: "./assets/img/prod-gatos/comida_gato_2.png"},
    //   {idProducto: 1002, nombre: "Alimento Premium para Gatos y Gatitos ", descripcion: "Comida Para Perro Cachorro Raza Mediana Pro-Can",
    //   idCategoria: 1, precioVenta: 10.00, stock: 6, urlFoto: "./assets/img/prod-gatos/comida_gato_3.png"},
    //   {idProducto: 1003, nombre: "Alimento Para Gatos Castrados", descripcion: "Cepillo para perros",
    //   idCategoria: 1, precioVenta: 17, stock: 9, urlFoto: "./assets/img/prod-gatos/comida_gato_4.png"},
    //   {idProducto: 1004, nombre: "Ratones 3 Unidades Juguete Clásico", descripcion: "Perfume para mascotas",
    //   idCategoria: 2, precioVenta: 1, stock: 20, urlFoto: "./assets/img/prod-gatos/juguete_gato_01.png"},
    //   {idProducto: 6, nombre: "Juguetes Variados de Gatos", descripcion: "Hueso de hule par perros",
    //   idCategoria: 2, precioVenta: 10, stock: 10, urlFoto: "./assets/img/prod-gatos/juguete_gato_02.png"},      
    //   {idProducto: 1005, nombre: "Juguete Porfiado Premium Con Plumas", descripcion: "Juguete porfiado premium con plumas para gatos",
    //   idCategoria: 2, precioVenta: 4.50, stock: 10, urlFoto: "./assets/img/prod-gatos/juguete_gato_03.png"},      
    //   {idProducto: 1006, nombre: "Caña De Pescar Telescópica Juguete Para Gato", descripcion: "Caña de pescar telescopica juguete para gato",
    //   idCategoria: 2, precioVenta: 10.00, stock: 10, urlFoto: "./assets/img/prod-gatos/juguete_gato_04.png"}
    // ]
  }
  ngOnInit() {
    GatosComponent.constructor();

    //this.mostrarProducto(); // Llamar al método mostrarProducto() al cargar el componente
  }

  // filtrarPorCategoria(categoria: string) {
  //   this.categoriaSeleccionada = categoria;
  //   this.listaFiltrada= [...this.listaProductosGatos];

  //   // Filtrar la lista de productos según la categoría seleccionada
  //   if (categoria === 'Todas') {
  //     // Mostrar todos los productos
  //     this.listaFiltrada ;
  //   } else {
  //     // Filtrar por categoría
  //     this.listaFiltrada = this.listaFiltrada.filter(producto => producto.idCategoria === this.getIdCategoria(categoria));
  //   }
  // }

  // mostrarProducto(){
  //   this.categoriaSeleccionada = 'Todas';
  //   this.listaFiltrada= [...this.listaProductosGatos];
  // }


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

  agregarCarrito(){

  }
}
