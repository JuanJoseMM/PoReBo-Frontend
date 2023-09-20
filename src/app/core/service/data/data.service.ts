import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "http://localhost:3000/api/v1"
  constructor(private http: HttpClient) { }
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
    return await this.http.get<any>(this.url + '/agent/' + id, {
      responseType: 'json',
      headers,
    })
  }

  public async sendDenuncia(data:any) {
    console.log("Registrando Denuncia")
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
    });
    const query={
      complainantId: "95b31016-7848-49a3-982e-0a496d9ab1ee",
      denouncedId: "4258d08f-cf38-495c-a71d-9eb7539ddc37",
      relationshipDegree: "Friend",
      timeOfIncident: "15:30:00",
      dateOfIncident: "2023-09-18",
      locationDescription: "Central Park, New York",
      croquisUrl: "https://example.com/croquis.png",
      descriptionOfIncident: "A verbal altercation occurred.",
      reportedToOtherAuthority: true,
      evidenceProvided: "Photos, videos",
      additionalInformation: "Additional details here",
      receivingAgentId: "4ccd307b-e0c2-4235-b643-497e82e0a16a",
      urgentInstructions: "Handle with care"
    }
    console.log(typeof(query))
    var rst= await this.http.post<any>(this.url + '/verbal-reports/create',query, {
      responseType: 'json',
      headers,
    }).subscribe(
      response=>{
        console.log(response)
      }
    )
    console.log(rst)
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