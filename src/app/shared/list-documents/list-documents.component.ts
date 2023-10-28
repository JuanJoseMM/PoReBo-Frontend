import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/service/state.service';

@Component({
  selector: 'app-list-documents',
  templateUrl: './list-documents.component.html',
  styleUrls: ['./list-documents.component.scss']
})
export class ListDocumentsComponent implements OnInit {

  public documents: any[] = [
    { date: '2023-01-01', code: 'ABC123' },
    { date: '2023-01-02', code: 'DEF456' },
    // ... más datos
  ];
  
  constructor(private state: StateService){}
  public agente= this.state.agente
  ngOnInit(): void {
    console.log(this.agente)
      
  }
}
