import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerrosComponent } from './components/catalogos/perros/perros.component';
import { GatosComponent } from './components/catalogos/gatos/gatos.component';
import { ConejosComponent } from './components/catalogos/conejos/conejos.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RestablecerContraComponent } from './components/restablecer-contra/restablecer-contra.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'',redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'perros', component: PerrosComponent },
  { path:'gatos', component: GatosComponent },
  { path:'conejos', component: ConejosComponent },
  { path:'registro', component: RegistroComponent },
  { path:'restablecer-contra', component: RestablecerContraComponent },
  { path:'sobre-nosotros', component: SobreNosotrosComponent },
  { path:'**',redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
