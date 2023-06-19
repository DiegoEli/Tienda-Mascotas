import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PerrosComponent } from './components/catalogos/perros/perros.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GatosComponent } from './components/catalogos/gatos/gatos.component';
import { ConejosComponent } from './components/catalogos/conejos/conejos.component';

const routes: Routes = [
  { path:'',redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'perros', component: PerrosComponent },
  { path:'gatos', component: GatosComponent },
  { path:'conejos', component: ConejosComponent },
  { path:'**',redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
