import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
