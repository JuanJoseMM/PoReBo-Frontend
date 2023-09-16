import { Injectable } from '@angular/core';
import {  HttpClient,  HttpErrorResponse,  HttpHeaders} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url="http://localhost:3000/api/v1"
  constructor(private http:HttpClient) { }
  public async getPersonbyID(id:string):Promise<Observable<any>>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return await this.http.get<any>(this.url+'/persons/dni/'+id,{
      responseType:'json',
      headers,
    })
  }
  
}

/**
 *   public async getDataAnimacionRuta(cadena: any): Promise<void> {
    console.log("Entrando a Animacion Ruta", cadena)
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: 'Token ' + this.auth.getToken(),
    });
    let results: any;
    const query = {
      "STRID": cadena
    };
    results = await this.http.post(this.mainUrl + 'queryanimacion/', query, {
      responseType: 'json',
      headers,
    })
      .toPromise();
    this.state.listaDatosAnimacionRuta = results[0]
    console.log("Resultado Animacion", results, this.state.listaDatosAnimacionRuta)
    return;
  }

 */