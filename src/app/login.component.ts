import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  template: `
    <h1>Please login with any credentials</h1>

    <input placeholder="Name" type="text" value="admin" />
    <input placeholder="Password" type="text" value="password" />
    <button (click)="login()" type="submit">Login</button>
  `,
})
export class LoginComponent {
  router = inject(Router);

  login(): void {
    localStorage.setItem('logged', '1');
    this.router.navigateByUrl('/home');
  }
}
