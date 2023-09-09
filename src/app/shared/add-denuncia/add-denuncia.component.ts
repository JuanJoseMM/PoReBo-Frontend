import { Component } from '@angular/core';

@Component({
  selector: 'app-add-denuncia',
  templateUrl: './add-denuncia.component.html',
  styleUrls: ['./add-denuncia.component.scss']
})
export class AddDenunciaComponent {

  public cardSelected=1

  nextCard(){
    this.cardSelected=this.cardSelected+1
  }
  previousCard(){
    this.cardSelected = this.cardSelected-1
  }
}
