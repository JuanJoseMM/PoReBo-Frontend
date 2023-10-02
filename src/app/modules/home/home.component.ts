import { Component } from '@angular/core';
import { StateService } from 'src/app/core/service/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(public state:StateService){}
}
