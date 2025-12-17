import { Component, OnInit} from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent{

  constructor(
    private usuarioService: UsuariosService,
  ){}

}
