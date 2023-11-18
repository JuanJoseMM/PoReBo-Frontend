import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = "http://porebo-backend-env.eba-be44jehw.us-east-1.elasticbeanstalk.com/api/v1"

  constructor(private http: HttpClient, private state: StateService) { }


  async agente(id: any): Promise<void> {
    console.log(id)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
  
    try {
      this.state.agente= await this.http.get(this.url + '/agent/'+id, {
        responseType: 'json',
        headers,
      }).toPromise();
      
      console.log("agente login",this.state.agente)
      this.state.agencia = this.state.agente["agency"]
      this.state.firma= this.state.agencia["person"]["signature"]["signature"]["data"]
    } catch (error) {
      console.log(error)
      
      throw new Error('Error de autenticación');  // Puedes cambiar este mensaje como prefieras.
    }
  }

  async login(id: any, pw: any): Promise<void> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const body = {
      "identity": id,
      "password": pw
    };
    try {
      this.state.usuario= await this.http.post(this.url + '/agent/login/', body).toPromise();
      this.state.isLogin=true
      console.log("usuario inicio sesion",this.state.usuario)
      this.agente(this.state.usuario.id)
    } catch (error) {
      console.log(error)
      this.state.isLogin=false
      throw new Error('Error de autenticación');  // Puedes cambiar este mensaje como prefieras.
    }
  }

}
