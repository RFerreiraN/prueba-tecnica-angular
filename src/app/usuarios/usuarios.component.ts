import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

import { Usuarios } from '../models/usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public usuarios : string[] = [];

  public users!: Usuarios[]
    public localStorageKey : string = 'usuarios'

  constructor(
    private usuarioService: UsuariosService,
  ) { }

  ngOnInit(): void {
    this.usuarios = JSON.parse(localStorage.getItem(this.localStorageKey) || '[]')
    console.log(this.usuarios);
  }


}
