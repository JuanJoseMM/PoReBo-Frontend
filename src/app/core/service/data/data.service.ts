import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { StateService } from '../state.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "http://ec2-54-157-168-45.compute-1.amazonaws.com/api/v1"
  public hora: any
  public fecha: any
  constructor(private http: HttpClient, private state: StateService) { }
  public async getPersonbyID(id: string): Promise<Observable<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return await this.http.get<any>(this.url + '/persons/dni/' + id, {
      responseType: 'json',
      headers,
    })
  }
  public async getLocationID(id: string): Promise<Observable<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return await this.http.get<any>(this.url + '/location/' + id, {
      responseType: 'json',
      headers,
    })
  }

  public getTimeNow() {
    const timeZone = 'America/Lima';

    // Convierte la hora UTC a la hora de Perú
    const peruTime = utcToZonedTime(new Date(), timeZone);

    // Formatea la fecha y hora en el formato deseado
    return format(peruTime, 'yyyy-MM-dd HH:mm');
  }

  public async getAgencyID(id: string): Promise<Observable<any>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    return await this.http.get<any>(this.url + '/agency/' + id, {
      responseType: 'json',
      headers,
    })
  }
  obtenerFechaHora() {
    const ahora = new Date();

    const horas = this.agregarCeros(ahora.getHours());
    const minutos = this.agregarCeros(ahora.getMinutes());
    const segundos = this.agregarCeros(ahora.getSeconds());
    const hora = `${horas}:${minutos}:${segundos}`;

    const año = ahora.getFullYear();
    const mes = this.agregarCeros(ahora.getMonth() + 1); // Los meses empiezan en 0
    const día = this.agregarCeros(ahora.getDate());
    const fecha = `${año}-${mes}-${día}`;

    this.hora = hora
    this.fecha = fecha
  }

  agregarCeros(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }

  public async sendDenuncia(data: any) {
    console.log("Registrando Denuncia")
    this.obtenerFechaHora()
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const query = {
      complainantId: data["complainantId"],
      denouncedId: data["denouncedId"],
      relationshipDegree: data["relationshipDegree"],
      timeOfIncident: this.hora,
      dateOfIncident: this.fecha,
      locationDescription: data["locationDescription"],
      croquisUrl: data["croquisUrl"],
      descriptionOfIncident: data["descriptionOfIncident"],
      reportedToOtherAuthority: true,
      evidenceProvided: data["evidenceProvided"],
      additionalInformation: data["additionalInformation"],
      receivingAgentId: data["receivingAgentId"],
      urgentInstructions: data["urgentInstructions"],
    }
    console.log(typeof (query))
    var rst = await this.http.post<any>(this.url + '/verbal-reports/create', query, {
      responseType: 'json',
      headers,
    }).subscribe(
      response => {
        console.log(response)
        this.state.idReporte = response["id"]
      }
    )
    console.log(rst)
  }
   leerArchivoComoBinario(archivo: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const resultado = reader.result as string;
        const binario = resultado.split(',')[1]; // Elimina el prefijo de Data URL
        resolve(binario);
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(archivo);
    });
  }
  async enviarPDF(archivo: any,id:any) {
    try {
      const binario = await this.leerArchivoComoBinario(archivo);
      const formData = new FormData();
      formData.append('file', new Blob([binario], { type: 'application/pdf' }), archivo.name);

      var rst =  this.http.post(this.url + '/verbal-reports/'+id+'/upload-pdf', formData).toPromise();
      console.log(rst)
      return;
    } catch (error) {
      console.error('Error al leer el archivo:', error);
    }
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