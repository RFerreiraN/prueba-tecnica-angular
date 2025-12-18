import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';

import { Usuarios } from '../models/usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  public users!: Usuarios[]
    public localStorageKey : string = 'usuarios'

  constructor(
    private usuarioService: UsuariosService,
  ) { }

  ngOnInit(): void {
     JSON.parse(localStorage.getItem(this.localStorageKey) || '[]')
  }


}
