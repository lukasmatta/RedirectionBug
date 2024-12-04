import { inject } from '@angular/core';
import { Location } from '@angular/common';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

export const LoginGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean => {
  const location = inject(Location);
  const isUserLoggedIn = localStorage.getItem('logged') === '1';

  if (isUserLoggedIn) {
    location.back();
    return false;
  }

  return true;
};
