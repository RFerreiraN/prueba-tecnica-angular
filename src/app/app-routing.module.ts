import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { UsuariosDetallesComponent } from './usuarios-detalles/usuarios-detalles.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'usuarios', component : UsuariosComponent},
  {path : 'usuarios/:id', component : UsuariosDetallesComponent},
  {path : '**', redirectTo : ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
