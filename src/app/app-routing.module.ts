import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { PerrosComponent } from './components/catalogos/perros/perros.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  { path:'',redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component: LoginComponent },
  { path:'navbar', component: NavbarComponent },
  { path:'perros', component: PerrosComponent },
  { path:'**',redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
