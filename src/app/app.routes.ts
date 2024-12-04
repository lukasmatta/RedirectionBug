import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { LoginGuard } from './login.guard';

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  if (localStorage.getItem('logged') === '1') {
    return true;
  }
  const router = inject(Router);
  return router.navigateByUrl('/login');
};

export const routes: Routes = [
  { path: 'login', canActivate: [LoginGuard], component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
