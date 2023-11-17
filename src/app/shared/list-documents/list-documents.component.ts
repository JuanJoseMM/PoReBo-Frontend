import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/service/state.service';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {

  public documents: any[] = [
    { date: '12-11-2023', code: 'ABC123', nombre:"E. Vences" },
    { date: '13-11-2023', code: 'DEF456', nombre:"E. Vences" },
    
  ];
  
  constructor(private state: StateService){}
  public agente= this.state.agente
  ngOnInit(): void {
    console.log(this.agente)
      
  }
}
