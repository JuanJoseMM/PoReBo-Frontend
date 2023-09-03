import { Component } from '@angular/core';

@Component({
  selector: 'app-lateral-bar',
  templateUrl: './lateral-bar.component.html',
  styleUrls: ['./lateral-bar.component.css']
})
export class LateralBarComponent {
  isCollapsed = false;
  toggleCollapse() {
    console.log(this.isCollapsed)
    this.isCollapsed = !this.isCollapsed;
  }
}
