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
  })
  constructor(private data:DataService){}
  nextCard(){
    this.cardSelected=this.cardSelected+1
  }
  previousCard(){
    this.cardSelected = this.cardSelected-1
  }

  async buscarByID(event: Event){
    (await this.data.getPersonbyID('71993871')).subscribe(
      respuesta => {
        console.log(respuesta)
        this.datosPersona = respuesta;
        console.log(this.datosPersona)
        this.cargarDatosPersona(this.datosPersona)
      },
      error => {
        console.error('Hubo un error al obtener los datos', error);
      }
    );

    

  }

  cargarDatosPersona(data:any){
    console.log(data)
    this.personaForm.patchValue({
      firstName : data.firstName,
      lastName : data.lastName,
      email : data.email,
      dial_code : data.dial_code,
      phone : data.phone,
      gender : data.gender,
      maritalStatus : data.maritalStatus,
      nativeLanguage : data.nativeLanguage,
      gradeInstruction : data.gradeInstruction,
      status : data.status,
      createAt : data.createAt,
      updateAt : data.updateAt,
    })
  }
}
