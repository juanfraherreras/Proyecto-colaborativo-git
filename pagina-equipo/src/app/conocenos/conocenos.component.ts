import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conocenos',
  standalone: true,
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css'
})
export class ConocenosComponent {
  constructor(private router: Router) {}

  irAInicio() {
    this.router.navigate(['/']);
  }
}