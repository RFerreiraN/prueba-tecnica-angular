import { Component } from '@angular/core';
import { Usuarios } from '../models/usuarios.model';
import { UsuariosService } from '../services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public usuariosList: Usuarios[] = [];
  public localStorageKey = 'usuarios'
  public nombresUsuarios : string[] = []

  constructor(
    public _usuariosServices: UsuariosService
  ) { }

  getUsuarios() {
    this._usuariosServices.getAllUsuarios().subscribe((data: Usuarios[]) => {
      this.usuariosList = data;

      this.usuariosList.forEach(usuario => {
        this.nombresUsuarios.push(usuario.name)
      })

      localStorage.setItem(this.localStorageKey, JSON.stringify(this.nombresUsuarios))
    })
  }



}
