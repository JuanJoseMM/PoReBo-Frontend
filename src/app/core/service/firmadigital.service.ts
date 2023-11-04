import { Injectable } from '@angular/core';
import { StateService } from './state.service';


@Injectable({
  providedIn: 'root'
})
export class FirmadigitalService {
  constructor(private state : StateService){}
  generateImage(): Promise<string> {
    return new Promise((resolve, reject) => {
      // Crear un canvas
      const canvas = document.createElement('canvas');
      var ctx:any=null
       ctx = canvas.getContext('2d');
      
      canvas.width = 200; // Ancho de la imagen
      canvas.height = 100; // Alto de la imagen
      
      // Color de fondo
      ctx.fillStyle = 'black'; // Fondo blanco
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = 'black';
      ctx.font = '20px Arial';
      ctx.fillText('Nombre: Ernesto Vences', 50, 50);
      ctx.fillText('Cargo: General de Policía', 50, 80);
      ctx.fillText('Fecha de Creación: 2023-10-07', 50, 110);
      // Convertir el canvas a DataURL
      const dataURL = canvas.toDataURL();
      console.log(dataURL)
      resolve(dataURL);
    });
  }



}
