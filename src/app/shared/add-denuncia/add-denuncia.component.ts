import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/core/service/data/data.service';

@Component({
  selector: 'app-add-denuncia',
  templateUrl: './add-denuncia.component.html',
  styleUrls: ['./add-denuncia.component.scss']
})
export class AddDenunciaComponent {

  public cardSelected=1
  public isDisabled = true
  private datosPersona:any
  private datoAgencia:any
  private datosDenunciado:any
  private datosLocation:any
  public personaForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    dial_code : new FormControl(''),
    phone : new FormControl(''),
    gender : new FormControl(''),
    maritalStatus : new FormControl(''),
    nativeLanguage : new FormControl(''),
    gradeInstruction : new FormControl(''),
    status : new FormControl(''),
    createAt : new FormControl(''),
    updateAt : new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
    statusLocation :new FormControl(''),
    address: new FormControl(''),
    descriptionAddress : new FormControl(''),
    referenceAddress : new FormControl(''),
    dateOfbirth: new FormControl(''),
    timeRegister: new FormControl(''),
    country: new FormControl(''),
    dependencianame : new FormControl(''),
    dependenciadepartamento : new FormControl(''),
    dependenciaprovincia : new FormControl(''),
    dependenciadistrito : new FormControl(''),
  })
  public denunciadoForm = new FormGroup({
    firstName : new FormControl(''),
    lastName : new FormControl(''),
    email : new FormControl(''),
    dial_code : new FormControl(''),
    phone : new FormControl(''),
    gender : new FormControl(''),
    maritalStatus : new FormControl(''),
    nativeLanguage : new FormControl(''),
    gradeInstruction : new FormControl(''),
    status : new FormControl(''),
    createAt : new FormControl(''),
    updateAt : new FormControl(''),
    location: new FormControl(''),
    description: new FormControl(''),
    statusLocation :new FormControl(''),
    address: new FormControl(''),
    descriptionAddress : new FormControl(''),
    referenceAddress : new FormControl(''),
    dateOfbirth: new FormControl(''),
    timeRegister: new FormControl(''),
    country: new FormControl(''),
  })
  constructor(private data:DataService){}
  nextCard(){
    this.cardSelected=this.cardSelected+1
  }
  previousCard(){
    this.cardSelected = this.cardSelected-1
  }

  async buscarByID(id:any){
    const idSearch = id.toString();
    await (await this.data.getPersonbyID(idSearch)).subscribe(
      respuesta => {
        this.datosPersona = respuesta;
        console.log(this.datosPersona)
      },
      error => {
        console.error('Hubo un error al obtener los datos', error);
      }
    );
    await (await this.data.getAgencyID('de60027d-8edc-472e-bc19-12ea56fb657b')).subscribe(
      respuesta => {
        this.datoAgencia = respuesta;
        console.log(this.datoAgencia)
      },
      error => {
        console.error('Hubo un error al obtener los datos', error);
      }
    );  
    setTimeout(() => {
      this.cargarDatosPersona(this.datosPersona,this.datoAgencia)  
    }, 1500);  
  }
  async buscarDenunciado(id: any){
    const idDenunciado = id.toString();
    await (await this.data.getPersonbyID(idDenunciado)).subscribe(
      respuesta2 => {
        console.log(respuesta2)
        this.datosDenunciado = respuesta2;
        console.log(this.datosDenunciado)
      },
      error => {
        console.error('Hubo un error al obtener los datos', error);
      }
    );    
    setTimeout(() => {
      this.cargarDatosDenunciado(this.datosDenunciado)  
    }, 1500);  
  }
  cargarDatosPersona(dataP:any,dataA:any){
    var hora = this.data.getTimeNow()
    this.personaForm.patchValue({
      firstName : dataP.firstName,
      lastName : dataP.lastName,
      email : dataP.email,
      dial_code : dataP.dial_code,
      phone : dataP.phone,
      gender : dataP.gender,
      maritalStatus : dataP.maritalStatus,
      nativeLanguage : dataP.nativeLanguage,
      gradeInstruction : dataP.gradeInstruction,
      status : dataP.status,
      createAt : dataP.createAt,
      updateAt : dataP.updateAt,
      address : dataP.identificationDocument.address.street,
      descriptionAddress : dataP.identificationDocument.address.description,
      referenceAddress : dataP.identificationDocument.address.reference,
      dateOfbirth : dataP.identificationDocument.dateOfBirth,
      timeRegister : hora,
      country: dataP.identificationDocument.location.name,
      dependencianame : dataA.name,
      dependenciadepartamento : dataA.location.parent.parent.name,
      dependenciaprovincia: dataA.location.parent.name,
      dependenciadistrito: dataA.location.name,
    })
  }
  cargarDatosDenunciado(dataD:any){
    this.denunciadoForm.patchValue({
      firstName : dataD.firstName,
      lastName : dataD.lastName,
      email : dataD.email,
      dial_code : dataD.dial_code,
      phone : dataD.phone,
      gender : dataD.gender,
      maritalStatus : dataD.maritalStatus,
      nativeLanguage : dataD.nativeLanguage,
      gradeInstruction : dataD.gradeInstruction,
      status : dataD.status,
      createAt : dataD.createAt,
      updateAt : dataD.updateAt,
      address : dataD.identificationDocument.address.street,
      descriptionAddress : dataD.identificationDocument.address.description,
      referenceAddress : dataD.identificationDocument.address.reference,
      dateOfbirth : dataD.identificationDocument.dateOfBirth,
      country: dataD.identificationDocument.location.name
    })
  }
}
