import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerrosComponent } from './components/catalogos/perros/perros.component';
import { GatosComponent } from './components/catalogos/gatos/gatos.component';
import { ConejosComponent } from './components/catalogos/conejos/conejos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RestablecerContraComponent } from './components/restablecer-contra/restablecer-contra.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HomeCatalogosComponent } from './home-catalogos/home-catalogos.component';

import { CategoriaService } from './services/categoria.service';
import { ClienteService } from './services/cliente.service';
import { EstadoCivilService } from './services/estado-civil.service';
import { ProductoService } from './services/producto.service';
import { TipoPagoService } from './services/tipo-pago.service';
import { UsuarioService } from './services/usuario.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    PerrosComponent,
    GatosComponent,
    ConejosComponent,
    RegistroComponent,
    RestablecerContraComponent,
    SobreNosotrosComponent,
    HomeComponent,
    CarritoComponent,
    HomeCatalogosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    CategoriaService,
    ClienteService,
    EstadoCivilService,
    ProductoService,
    TipoPagoService,
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
