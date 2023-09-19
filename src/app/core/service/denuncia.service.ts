import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';
import { StateService } from './state.service';
@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  // Contenido para registro de Denuncia
  private _seedDenunciado: string = '';
  public get seedDenunciado(): string {
    return this._seedDenunciado;
  }
  public set seedDenunciado(value: string) {
    this._seedDenunciado = value;
  }
  private _agenteRecepcion: string = '';
  public get agenteId(): string {
    return this._agenteRecepcion;
  }
  public set agenteId(value: string) {
    this._agenteRecepcion = value;
  }
  private _relacionAcusado: string = '';
  public get relacionAcusado(): string {
    return this._relacionAcusado;
  }
  public set relacionAcusado(value: string) {
    this._relacionAcusado = value;
  }
  private _tiempoDenuncia: string = '';
  public get tiempoDenuncia(): string {
    return this._tiempoDenuncia;
  }
  public set tiempoDenuncia(value: string) {
    this._tiempoDenuncia = value;
  }
  private _fechaDenuncia: string = '';
  public get fechaDenuncia(): string {
    return this._fechaDenuncia;
  }
  public set fechaDenuncia(value: string) {
    this._fechaDenuncia = value;
  }
  private _locacionDenuncia: string = '';
  public get locacionDenuncia(): string {
    return this._locacionDenuncia;
  }
  public set locacionDenuncia(value: string) {
    this._locacionDenuncia = value;
  }
  private _croquisDenuncia: string = '';
  public get croquisDenuncia(): string {
    return this._croquisDenuncia;
  }
  public set croquisDenuncia(value: string) {
    this._croquisDenuncia = value;
  }
  private _hechoDenuncia: string = '';
  public get hechoDenuncia(): string {
    return this._hechoDenuncia;
  }
  public set hechoDenuncia(value: string) {
    this._hechoDenuncia = value;
  }
  private _isReportes: boolean = false;
  public get isReportes(): boolean {
    return this._isReportes;
  }
  public set isReportes(value: boolean) {
    this._isReportes = value;
  }
  private _evidenciaDenuncia: string = '';
  public get evidenciaDenuncia(): string {
    return this._evidenciaDenuncia;
  }
  public set evidenciaDenuncia(value: string) {
    this._evidenciaDenuncia = value;
  }
  private _adicionalDenuncia: string = '';
  public get adicionalDenuncia(): string {
    return this._adicionalDenuncia;
  }
  public set adicionalDenuncia(value: string) {
    this._adicionalDenuncia = value;
  }
  private _instruccionesDenuncia: string = '';
  public get instruccionesDenuncia(): string {
    return this._instruccionesDenuncia;
  }
  public set instruccionesDenuncia(value: string) {
    this._instruccionesDenuncia = value;
  }


  constructor(private state: StateService) { }
  generarPDF(fgDenunciante: FormGroup, fgDenunciado: FormGroup, fgParentesco: FormGroup, fgHecho: FormGroup, fgAdicional: FormGroup) {
    var linea = 10;
    const doc = new jsPDF();

    // Obtén la información de los formularios
    const dataDenunciante = fgDenunciante.value;
    const dataDenunciado = fgDenunciado.value;
    const dataParentesco = fgParentesco.value;
    const dataHecho = fgHecho.value;
    const dataAdicional = fgAdicional.value;

    const maxWidth = 180; // Anchura máxima para el texto


    // Agrega contenido al PDF
    doc.text(`Datos del formulario Denunciante:`, 10, 10);
    var y = 20;
    for (const key in dataDenunciante) {
      doc.text(`${key}: ${dataDenunciante[key]}`, 10, y);
      y += 10;
    }
    doc.addPage();

    doc.text(`Datos del formulario Denunciado:`, 10, 10);
    y = 20;
    for (const key in dataDenunciado) {
      doc.text(`${key}: ${dataDenunciado[key]}`, 10, y);
      y += 10;
    }

    doc.addPage();
    doc.text(`Datos del formulario Parentesco:`, 10, 10);
    y = 20;
    for (const key in dataParentesco) {
      doc.text(`${key}: ${dataParentesco[key]}`, 10, y);
      y += 10;
    }

    doc.addPage();
    doc.text(`Datos del formulario Hecho:`, 10, 10);
    y = 20;
    for (const key in dataHecho) {
      var texto = `${key}: ${dataHecho[key]}`;
      const splitText = doc.splitTextToSize(texto, maxWidth); // Divide el texto
      doc.text(splitText, 10, y); // Este método puede manejar array de strings (splitText)
      y += 10;
    }


    doc.addPage();
    doc.text(`Datos del formulario Adicional:`, 10, 10);
    y = 20;
    for (const key in dataAdicional) {
      var texto = `${key}: ${dataAdicional[key]}`;
      const splitText = doc.splitTextToSize(texto, maxWidth); // Divide el texto
      doc.text(splitText, 10, y); // Este método puede manejar array de strings (splitText)
      y += 10;
    }
    // Guarda el PDF
    doc.save('formulario.pdf');
  }
}
