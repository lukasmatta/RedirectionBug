import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  template: `
    <h1>Welcome home!</h1>
    <button (click)="logout()">Logout</button>
  `,
})
export class HomeComponent {
  router = inject(Router);

  logout(): void {
    localStorage.removeItem('logged');
    this.router.navigateByUrl('/login');
  }
}
