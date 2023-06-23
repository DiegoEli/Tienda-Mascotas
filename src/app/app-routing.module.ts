import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerrosComponent } from './components/catalogos/perros/perros.component';
import { GatosComponent } from './components/catalogos/gatos/gatos.component';
import { ConejosComponent } from './components/catalogos/conejos/conejos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RestablecerContraComponent } from './components/restablecer-contra/restablecer-contra.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HomeCatalogosComponent } from './home-catalogos/home-catalogos.component';

const routes: Routes = [
  { path:'',redirectTo: 'home', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'home', component: HomeComponent },
  { path:'perros', component: PerrosComponent },
  { path:'gatos', component: GatosComponent },
  { path:'conejos', component: ConejosComponent },
  { path:'registro', component: RegistroComponent },
  { path:'restablecer-contra', component: RestablecerContraComponent },
  { path:'sobre-nosotros', component: SobreNosotrosComponent },
  { path:'carrito', component: CarritoComponent },
  { path:'home-catalogos', component: HomeCatalogosComponent },
  { path:'**',redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
