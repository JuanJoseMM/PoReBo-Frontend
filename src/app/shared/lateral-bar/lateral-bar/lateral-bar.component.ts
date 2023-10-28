import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/core/service/state.service';

@Component({
  selector: 'app-lateral-bar',
  templateUrl: './lateral-bar.component.html',
  styleUrls: ['./lateral-bar.component.css']
})
export class LateralBarComponent {
  isCollapsed = true;
  constructor(private state:StateService){}
  ngOnInit(): void {

  }
  toggleCollapse() {
    console.log(this.isCollapsed)
    this.isCollapsed = !this.isCollapsed;
  }

irRegistrarActa(){
  this.state.selectedHome=1
}
irBuscarActa(){
  this.state.selectedHome=0
}
}
