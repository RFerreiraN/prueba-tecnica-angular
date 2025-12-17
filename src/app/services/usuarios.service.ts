import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuarios } from '../models/usuarios.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public baseURL : string = 'https://developerapis.vercel.app/api/users'

  constructor(
    private _http : HttpClient,
  ) { }

  public getAllUsuarios(): Observable<Usuarios[]>  {
      return this._http.get<Usuarios[]>(this.baseURL)
  }

  public getUsuarioById( id : string ) : Observable <Usuarios> {
    return this._http.get<Usuarios>(`${this.baseURL}/${id}`);
  }
  
  public newUsuario( usuario : Usuarios ) : Observable <Usuarios>{
    return this._http.post<Usuarios>(this.baseURL, usuario)
  }

  public updateUsuario(id: string, usuario : Usuarios) : Observable <Usuarios> {
    return this._http.put<Usuarios>(`${this.baseURL}/${id}`, usuario)
  }

  public deleteUsuario(id : string) : Observable<Usuarios>{
    return this._http.delete<Usuarios>(`${this.baseURL}/${id}`)
  }

//   getUsuarios() {
//     this._usuariosServices.getAllUsuarios().subscribe((data: Usuarios[]) => {
//       this.usuariosList = data;

//       this.usuariosList.forEach(usuario => {
//         this.nombresUsuarios.push(usuario.name)
//       })

//       localStorage.setItem(this.localStorageKey, JSON.stringify(this.nombresUsuarios))
//     })
//   }
// 
}
