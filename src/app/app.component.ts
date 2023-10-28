import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porebo-frontend';
  constructor(private router: Router){ }
  ngOnInit() {
    // Al iniciar el componente, redirige al login.
    this.router.navigate(['/login']);
  }
}
